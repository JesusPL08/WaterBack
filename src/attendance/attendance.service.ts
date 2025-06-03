import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { startOfDay, endOfDay } from 'date-fns';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAttendanceDto) {
    const user = await this.prisma.user.findUnique({ where: { id: data.userId } });
    const type = await this.prisma.attendanceType.findUnique({ where: { id: data.attendanceTypeId } });

    if (!user || !type) {
      throw new NotFoundException('Usuario o Tipo de Asistencia no encontrado');
    }

    const existingAttendance = await this.prisma.attendance.findFirst({
      where: {
        userId: data.userId,
        date: {
          gte: startOfDay(new Date(data.date)),
          lte: endOfDay(new Date(data.date)),
        },
        deletedAt: null,
      },
    });

    if (existingAttendance) {
      if (existingAttendance.paid) {
        throw new BadRequestException('La asistencia ya fue pagada y no puede ser modificada.');
      }

      return this.prisma.attendance.update({
        where: { id: existingAttendance.id },
        data,
      });
    }

    return this.prisma.attendance.create({ data });
  }

  async findAll() {
    return this.prisma.attendance.findMany({
      where: { deletedAt: null },
      include: {
        user: true,
        attendanceType: true,
      },
    });
  }

  async findOne(id: number) {
    const attendance = await this.prisma.attendance.findFirst({
      where: { id, deletedAt: null },
      include: {
        user: true,
        attendanceType: true,
      },
    });

    if (!attendance) throw new NotFoundException('Asistencia no encontrada');
    return attendance;
  }

  async update(id: number, data: UpdateAttendanceDto) {
    const attendance = await this.findOne(id);

    if (attendance.paid) {
      throw new BadRequestException('No se puede actualizar una asistencia que ya fue pagada.');
    }

    return this.prisma.attendance.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    const attendance = await this.findOne(id);

    if (attendance.paid) {
      throw new BadRequestException('No se puede eliminar una asistencia que ya fue pagada.');
    }

    return this.prisma.attendance.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
