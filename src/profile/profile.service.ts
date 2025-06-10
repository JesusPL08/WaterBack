import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProfileDto) {
    const { permissions, ...profileData } = data;

    return this.prisma.profile.create({
      data: {
        ...profileData,
        permissions: {
          connect: permissions?.map((id) => ({ id })) || [],
        },
      },
    });
  }

  async findAll() {
    return this.prisma.profile.findMany({
      where: { deletedAt: null },
      include: { permissions: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.profile.findFirst({
      where: { id, deletedAt: null },
      include: { permissions: true },
    });
  }

  async update(id: number, data: UpdateProfileDto) {
    const { permissions, ...profileData } = data;

    return this.prisma.profile.update({
      where: { id },
      data: {
        ...profileData,
        permissions: {
          set: permissions?.map((id) => ({ id })) || [],
        },
      },
    });
  }

  async softDelete(id: number) {
    return this.prisma.profile.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
