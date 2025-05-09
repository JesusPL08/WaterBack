import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear
} from 'date-fns';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const { user, password, ...userData } = data;

    const createdUser = await this.prisma.user.create({
      data: userData,
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    await this.prisma.login.create({
      data: {
        user,
        password: hashedPassword,
        userId: createdUser.id,
      },
    });

    return createdUser;
  }

  async findAll() {
    return this.prisma.user.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    return this.prisma.user.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    return this.prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  async getSalaryReport(userId: number, period: 'week' | 'month' | 'year', referenceDate: Date = new Date()) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { salary: true },
    });

    if (!user || !user.salary) {
      throw new NotFoundException('Usuario o salario no encontrado');
    }

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

    const attendances = await this.prisma.attendance.findMany({
      where: {
        userId,
        date: {
          gte: dateRange.start,
          lte: dateRange.end,
        },
        deletedAt: null,
      },
    });

    const totalHours = attendances.reduce((acc, att) => acc + att.workedHours, 0);
    const monthlySalary = user.salary.baseRate;

    const hourlySalary = monthlySalary / (4 * 40); // Aproximado: 4 semanas, 40 horas por semana
    const totalEarned = totalHours * hourlySalary;

    return {
      user: user.name,
      totalHours,
      hourlySalary,
      totalEarned,
      period,
      dateRange,
    };
  }
}
