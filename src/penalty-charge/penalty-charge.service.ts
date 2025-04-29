import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePenaltyChargeDto } from './dto/create-penalty-charge.dto';
import { UpdatePenaltyChargeDto } from './dto/update-penalty-charge.dto';

@Injectable()
export class PenaltyChargeService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePenaltyChargeDto) {
    const user = await this.prisma.user.findUnique({ where: { id: data.userId } });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    return this.prisma.penaltyCharge.create({ data });
  }

  async findAll() {
    return this.prisma.penaltyCharge.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const penalty = await this.prisma.penaltyCharge.findFirst({
      where: { id, deletedAt: null },
    });
    if (!penalty) throw new NotFoundException('Penalización no encontrada');
    return penalty;
  }

  async update(id: number, data: UpdatePenaltyChargeDto) {
    await this.findOne(id);
    return this.prisma.penaltyCharge.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);
    return this.prisma.penaltyCharge.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
