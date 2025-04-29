import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCostDto } from './dto/create-cost.dto';
import { UpdateCostDto } from './dto/update-cost.dto';

@Injectable()
export class CostService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCostDto) {
    const supplier = await this.prisma.supplier.findUnique({ where: { id: data.supplierId } });
    const product = await this.prisma.product.findUnique({ where: { id: data.productId } });

    if (!supplier || !product) {
      throw new NotFoundException('Proveedor o Producto no encontrado');
    }

    return this.prisma.cost.create({ data });
  }

  async findAll() {
    return this.prisma.cost.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const cost = await this.prisma.cost.findFirst({
      where: { id, deletedAt: null },
    });
    if (!cost) throw new NotFoundException('Costo no encontrado');
    return cost;
  }

  async update(id: number, data: UpdateCostDto) {
    await this.findOne(id);
    return this.prisma.cost.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);
    return this.prisma.cost.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
