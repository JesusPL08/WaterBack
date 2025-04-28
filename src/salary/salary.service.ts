import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';

@Injectable()
export class SalaryService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSalaryDto) {
    return this.prisma.salary.create({ data });
  }

  async findAll() {
    return this.prisma.salary.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    return this.prisma.salary.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateSalaryDto) {
    return this.prisma.salary.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    return this.prisma.salary.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
