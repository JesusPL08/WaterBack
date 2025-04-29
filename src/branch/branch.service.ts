import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Injectable()
export class BranchService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBranchDto) {
    return this.prisma.branch.create({ data });
  }

  async findAll() {
    return this.prisma.branch.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    return this.prisma.branch.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateBranchDto) {
    return this.prisma.branch.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    return this.prisma.branch.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
