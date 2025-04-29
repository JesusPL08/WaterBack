import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SupplierService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSupplierDto) {
    return this.prisma.supplier.create({ data });
  }

  async findAll() {
    return this.prisma.supplier.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const supplier = await this.prisma.supplier.findFirst({
      where: { id, deletedAt: null },
    });
    if (!supplier) throw new NotFoundException('Proveedor no encontrado');
    return supplier;
  }

  async update(id: number, data: UpdateSupplierDto) {
    await this.findOne(id);
    return this.prisma.supplier.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);
    return this.prisma.supplier.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
