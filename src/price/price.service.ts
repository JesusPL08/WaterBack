import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';

@Injectable()
export class PriceService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePriceDto) {
    return this.prisma.price.create({ data });
  }

  async findAll() {
    return this.prisma.price.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    return this.prisma.price.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdatePriceDto) {
    return this.prisma.price.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    return this.prisma.price.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
