import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Injectable()
export class SaleService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSaleDto) {
    // Validar existencia de relaciones
    const branch = await this.prisma.branch.findUnique({ where: { id: data.branchId } });
    if (!branch) throw new NotFoundException('Sucursal no encontrada');

    const user = await this.prisma.user.findUnique({ where: { id: data.userId } });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    const commission = await this.prisma.commission.findUnique({ where: { id: data.commissionId } });
    if (!commission) throw new NotFoundException('Comisión no encontrada');

    return this.prisma.sale.create({ data });
  }

  async findAll() {
    return this.prisma.sale.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const sale = await this.prisma.sale.findFirst({
      where: { id, deletedAt: null },
    });
    if (!sale) throw new NotFoundException('Venta no encontrada');
    return sale;
  }

  async update(id: number, data: UpdateSaleDto) {
    await this.findOne(id); // valida que exista
    return this.prisma.sale.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id); // valida que exista
    return this.prisma.sale.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
