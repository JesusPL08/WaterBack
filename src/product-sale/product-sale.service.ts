import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductSaleDto } from './dto/create-product-sale.dto';
import { UpdateProductSaleDto } from './dto/update-product-sale.dto';

@Injectable()
export class ProductSaleService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductSaleDto) {
    return this.prisma.productSale.create({ data });
  }

  async findAll() {
    return this.prisma.productSale.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    return this.prisma.productSale.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateProductSaleDto) {
    return this.prisma.productSale.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    return this.prisma.productSale.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
