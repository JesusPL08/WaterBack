import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDeliveryBranchDto } from './dto/create-delivery-branch.dto';
import { UpdateDeliveryBranchDto } from './dto/update-delivery-branch.dto';
import { Prisma } from '@prisma/client';
@Injectable()
export class DeliveryBranchService {
  constructor(private prisma: PrismaService) {}

async create(data: CreateDeliveryBranchDto) {
  const prismaData: Prisma.DeliveryBranchCreateInput = {
    user: { connect: { id: data.userId } },
    branch: { connect: { id: data.branchId } },
    priority: data.priority,
    status: data.status,
    ticket: data.ticketId ? { connect: { id: data.ticketId } } : undefined,
  };

  return this.prisma.deliveryBranch.create({ data: prismaData });
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
