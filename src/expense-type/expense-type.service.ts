import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExpenseTypeDto } from './dto/create-expense-type.dto';
import { UpdateExpenseTypeDto } from './dto/update-expense-type.dto';

@Injectable()
export class ExpenseTypeService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateExpenseTypeDto) {
    return this.prisma.expenseType.create({ data });
  }

  async findAll() {
    return this.prisma.expenseType.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const type = await this.prisma.expenseType.findFirst({
      where: { id, deletedAt: null },
    });
    if (!type) throw new NotFoundException('Tipo de gasto no encontrado');
    return type;
  }

  async update(id: number, data: UpdateExpenseTypeDto) {
    await this.findOne(id);
    return this.prisma.expenseType.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);
    return this.prisma.expenseType.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
