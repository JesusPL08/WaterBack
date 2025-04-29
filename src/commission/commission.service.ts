import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommissionDto } from './dto/create-commission.dto';
import { UpdateCommissionDto } from './dto/update-commission.dto';

@Injectable()
export class CommissionService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCommissionDto) {
    
    const user = await this.prisma.user.findUnique({ where: { id: data.userId } });
    const branch = await this.prisma.branch.findUnique({ where: { id: data.branchId } });

    if (!user || !branch) {
      throw new NotFoundException('Usuario o Sucursal no encontrados');
    }

    return this.prisma.commission.create({ data });
  }

  async findAll() {
    return this.prisma.commission.findMany({ where: { deletedAt: null } });
  }

  async findOne(id: number) {
    const commission = await this.prisma.commission.findFirst({
      where: { id, deletedAt: null },
    });
    if (!commission) throw new NotFoundException('Comisión no encontrada');
    return commission;
  }

  async update(id: number, data: UpdateCommissionDto) {
    await this.findOne(id);
    return this.prisma.commission.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);
    return this.prisma.commission.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
