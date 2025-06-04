import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDeliveryBranchDto } from './dto/create-delivery-branch.dto';
import { UpdateDeliveryBranchDto } from './dto/update-delivery-branch.dto';
import { Prisma } from '@prisma/client';
@Injectable()
export class DeliveryBranchService {
  constructor(private prisma: PrismaService) {}
  
async create(data: CreateDeliveryBranchDto) {
  return this.prisma.deliveryBranch.create({
    data: {
      ...data,
      ticketId: data.ticketId ?? null, // <- ya aceptado correctamente
    },
  });
}



  async findAll() {
    return this.prisma.deliveryBranch.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    return this.prisma.deliveryBranch.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateDeliveryBranchDto) {
    const { ticketId, ...rest } = data;

    return this.prisma.deliveryBranch.update({
      where: { id },
      data: {
        ...rest,
        ...(ticketId !== undefined ? { ticketId } : {}), // mismo patrón
      },
    });
  }

  async softDelete(id: number) {
    return this.prisma.deliveryBranch.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
