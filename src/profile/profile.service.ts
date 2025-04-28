import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProfileDto) {
    return this.prisma.profile.create({ data });
  }

  async findAll() {
    return this.prisma.profile.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    return this.prisma.profile.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateProfileDto) {
    return this.prisma.profile.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    return this.prisma.profile.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
