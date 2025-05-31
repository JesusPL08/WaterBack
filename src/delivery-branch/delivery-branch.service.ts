import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDeliveryBranchDto } from './dto/create-delivery-branch.dto';
import { UpdateDeliveryBranchDto } from './dto/update-delivery-branch.dto';

@Injectable()
export class DeliveryBranchService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateDeliveryBranchDto) {
    return this.prisma.deliveryBranch.create({ data });
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
    return this.prisma.deliveryBranch.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    return this.prisma.deliveryBranch.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
