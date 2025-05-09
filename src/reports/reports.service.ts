import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} from 'date-fns';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async getSalaryReport(
    userId: number,
    period: 'week' | 'month' | 'year',
    referenceDate: Date = new Date()
  ) {
    if (!userId || isNaN(userId)) {
      throw new Error('ID inválido recibido');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { salary: true },
    });

    if (!user || !user.salary) {
      throw new NotFoundException('Usuario o salario no encontrado');
    }

    // Determinar rango de fechas según el periodo
    let dateRange = { start: new Date(), end: new Date() };
    if (period === 'week') {
      dateRange.start = startOfWeek(referenceDate, { weekStartsOn: 1 });
      dateRange.end = endOfWeek(referenceDate, { weekStartsOn: 1 });
    } else if (period === 'month') {
      dateRange.start = startOfMonth(referenceDate);
      dateRange.end = endOfMonth(referenceDate);
    } else if (period === 'year') {
      dateRange.start = startOfYear(referenceDate);
      dateRange.end = endOfYear(referenceDate);
    }

    // Asistencias del periodo
    const allAttendances = await this.prisma.attendance.findMany({
        where: {
          userId,
          paid: true,
          deletedAt: null,
        },
      });
      
      const attendances = allAttendances.filter(att => {
        const attDate = new Date(att.date);
        return attDate >= dateRange.start && attDate <= dateRange.end;
      });
      
      const uniqueDays = new Set(
        attendances.map(att => new Date(att.date).toISOString().split('T')[0])
      );
      const workedDays = uniqueDays.size;
      
    const salaryEarned = workedDays * user.salary.baseRate;

    // Bonos del periodo
    const bonuses = await this.prisma.bonus.findMany({
      where: {
        userId,
        date: {
          gte: dateRange.start,
          lte: dateRange.end,
        },
        deletedAt: null,
      },
    });

    const totalBonuses = bonuses.reduce((sum, b) => sum + b.amount, 0);

    // Penalizaciones del periodo
    const penalties = await this.prisma.penaltyCharge.findMany({
      where: {
        userId,
        date: {
          gte: dateRange.start,
          lte: dateRange.end,
        },
        deletedAt: null,
      },
    });

    const totalPenalties = penalties.reduce((sum, p) => sum + p.amount, 0);

    const totalEarned = salaryEarned + totalBonuses - totalPenalties;

    return {
      user: user.name,
      baseRate: user.salary.baseRate,
      workedDays,
      salaryEarned,
      totalBonuses,
      totalPenalties,
      totalEarned,
      period,
      dateRange,
    };
  }
  async getAllSalaryReports(
    period: 'week' | 'month' | 'year',
    referenceDate: Date = new Date()
  ) {
    const users = await this.prisma.user.findMany({
      where: {
        deletedAt: null,
        salaryId: { not: undefined }

      },
      include: { salary: true }
    });
  
    const results: any[] = [];

  
    for (const user of users) {
      const report = await this.getSalaryReport(user.id, period, referenceDate);
      results.push(report);
    }
  
    return results;
  }
  
}
