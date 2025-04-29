import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBonusDto } from './dto/create-bonus.dto';
import { UpdateBonusDto } from './dto/update-bonus.dto';

@Injectable()
export class BonusService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBonusDto) {
    const user = await this.prisma.user.findUnique({ where: { id: data.userId } });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    return this.prisma.bonus.create({ data });
  }

  async findAll() {
    return this.prisma.bonus.findMany({ where: { deletedAt: null } });
  }

  async findOne(id: number) {
    const bonus = await this.prisma.bonus.findFirst({
      where: { id, deletedAt: null },
    });
    if (!bonus) throw new NotFoundException('Bono no encontrado');
    return bonus;
  }

  async update(id: number, data: UpdateBonusDto) {
    await this.findOne(id);
    return this.prisma.bonus.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);
    return this.prisma.bonus.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
