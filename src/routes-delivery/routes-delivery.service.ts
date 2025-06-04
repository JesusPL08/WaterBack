import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoutesDeliveryDto } from './dto/create-routes-delivery.dto';
import { UpdateRoutesDeliveryDto } from './dto/update-routes-delivery.dto';

@Injectable()
export class RoutesDeliveryService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRoutesDeliveryDto) {
    return this.prisma.routesDelivery.create({ data });
  }

  async findAll() {
    return this.prisma.routesDelivery.findMany({
      where: { deletedAt: null },
    });
  }
  async findByRoutesDayId(routesDayId: number) {
  return this.prisma.routesDelivery.findMany({
    where: {
      routesDayId,
      deletedAt: null,
    },
    include: {
      deliveryBranch: {
        include: {
          branch: true, // solo si tienes una relación hacia Branch
        },
      },
    },
  });
}


  async findOne(id: number) {
    return this.prisma.routesDelivery.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateRoutesDeliveryDto) {
    return this.prisma.routesDelivery.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    return this.prisma.routesDelivery.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
