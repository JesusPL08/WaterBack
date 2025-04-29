import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Injectable()
export class RouteService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRouteDto) {
    const branch = await this.prisma.branch.findUnique({ where: { id: data.branchId } });
    if (!branch) throw new NotFoundException('Sucursal no encontrada');

    return this.prisma.route.create({ data });
  }

  async findAll() {
    return this.prisma.route.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const route = await this.prisma.route.findFirst({
      where: { id, deletedAt: null },
    });
    if (!route) throw new NotFoundException('Ruta no encontrada');
    return route;
  }

  async update(id: number, data: UpdateRouteDto) {
    await this.findOne(id);
    return this.prisma.route.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);
    return this.prisma.route.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
