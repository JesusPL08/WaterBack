import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoutesDayDto } from './dto/create-routes-day.dto';
import { UpdateRoutesDayDto } from './dto/update-routes-day.dto';

@Injectable()
export class RoutesDayService {
  constructor(private prisma: PrismaService) {}

async create(data: CreateRoutesDayDto) {
  return this.prisma.routesDay.create({
    data: {
      name: data.name,
      routeDay: new Date(data.routeDay),
      status: data.status,
    },
  });
}
  async findAll() {
    return this.prisma.routesDay.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    return this.prisma.routesDay.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateRoutesDayDto) {
    return this.prisma.routesDay.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    return this.prisma.routesDay.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
