import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAttendanceTypeDto } from './dto/create-attendance-type.dto';
import { UpdateAttendanceTypeDto } from './dto/update-attendance-type.dto';

@Injectable()
export class AttendanceTypeService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAttendanceTypeDto) {
    return this.prisma.attendanceType.create({ data });
  }

  async findAll() {
    return this.prisma.attendanceType.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const attendanceType = await this.prisma.attendanceType.findFirst({
      where: { id, deletedAt: null },
    });
    if (!attendanceType) throw new NotFoundException('Tipo de asistencia no encontrado');
    return attendanceType;
  }

  async update(id: number, data: UpdateAttendanceTypeDto) {
    await this.findOne(id);
    return this.prisma.attendanceType.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);
    return this.prisma.attendanceType.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
