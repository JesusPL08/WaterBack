import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateClientDto) {
    return this.prisma.client.create({ data });
  }

  async findAll() {
    return this.prisma.client.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    return this.prisma.client.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateClientDto) {
    return this.prisma.client.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    return this.prisma.client.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
