import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpenseService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateExpenseDto) {
    const cost = await this.prisma.cost.findUnique({ where: { id: data.costId } });
    const type = await this.prisma.expenseType.findUnique({ where: { id: data.expenseTypeId } });

    if (!cost || !type) {
      throw new NotFoundException('Costo o tipo de gasto no encontrado');
    }

    return this.prisma.expense.create({ data });
  }

  async findAll() {
    return this.prisma.expense.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const expense = await this.prisma.expense.findFirst({
      where: { id, deletedAt: null },
    });
    if (!expense) throw new NotFoundException('Gasto no encontrado');
    return expense;
  }

  async update(id: number, data: UpdateExpenseDto) {
    await this.findOne(id);
    return this.prisma.expense.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);
    return this.prisma.expense.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
