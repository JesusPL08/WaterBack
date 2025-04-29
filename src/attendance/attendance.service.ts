import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAttendanceDto) {
    const user = await this.prisma.user.findUnique({ where: { id: data.userId } });
    const type = await this.prisma.attendanceType.findUnique({ where: { id: data.attendanceTypeId } });

    if (!user || !type) {
      throw new NotFoundException('Usuario o Tipo de Asistencia no encontrado');
    }

    return this.prisma.attendance.create({ data });
  }

  async findAll() {
    return this.prisma.attendance.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const attendance = await this.prisma.attendance.findFirst({
      where: { id, deletedAt: null },
    });
    if (!attendance) throw new NotFoundException('Asistencia no encontrada');
    return attendance;
  }

  async update(id: number, data: UpdateAttendanceDto) {
    await this.findOne(id);
    return this.prisma.attendance.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);
    return this.prisma.attendance.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
