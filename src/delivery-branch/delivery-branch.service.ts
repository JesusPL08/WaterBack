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
      ...(data.ticketId && {
        ticket: { connect: { id: data.ticketId } },
      }),
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
    const updateData: Prisma.DeliveryBranchUpdateInput = {
      priority: data.priority,
      status: data.status,
      ...(data.userId && { user: { connect: { id: data.userId } } }),
      ...(data.branchId && { branch: { connect: { id: data.branchId } } }),
      ...(data.ticketId !== undefined && {
        ticket: data.ticketId
          ? { connect: { id: data.ticketId } }
          : { disconnect: true }, // elimina relación si null o 0
      }),
    };

    return this.prisma.deliveryBranch.update({
      where: { id },
      data: updateData,
    });
  }

  async softDelete(id: number) {
    return this.prisma.deliveryBranch.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
