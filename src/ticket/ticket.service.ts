import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTicketDto) {
    return this.prisma.ticket.create({ data });
  }

  async findAll() {
    return this.prisma.ticket.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    return this.prisma.ticket.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateTicketDto) {
    return this.prisma.ticket.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    return this.prisma.ticket.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
