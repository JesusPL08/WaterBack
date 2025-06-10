import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAreaDto) {
    return this.prisma.area.create({ data });
  }

  async findAll() {
    return this.prisma.area.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const area = await this.prisma.area.findFirst({
      where: { id, deletedAt: null },
    });
    if (!area) throw new NotFoundException('Área no encontrada');
    return area;
  }

  async update(id: number, data: UpdateAreaDto) {
    await this.findOne(id);
    return this.prisma.area.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);
    return this.prisma.area.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
