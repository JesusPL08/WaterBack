import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductDto) {
    return this.prisma.product.create({ data });
  }

  async findAll() {
    return this.prisma.product.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findFirst({
      where: { id, deletedAt: null },
    });
    if (!product) throw new NotFoundException('Producto no encontrado');
    return product;
  }

  async update(id: number, data: UpdateProductDto) {
    await this.findOne(id);
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);
    return this.prisma.product.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
