import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePermissionDto) {
    return this.prisma.permission.create({ data });
  }

  async findAll() {
    return this.prisma.permission.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const permission = await this.prisma.permission.findFirst({
      where: { id, deletedAt: null },
    });
    if (!permission) throw new NotFoundException('Permiso no encontrado');
    return permission;
  }

  async update(id: number, data: UpdatePermissionDto) {
    await this.findOne(id);
    return this.prisma.permission.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);
    return this.prisma.permission.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
