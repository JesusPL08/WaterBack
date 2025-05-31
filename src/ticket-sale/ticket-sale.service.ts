import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTicketSaleDto } from './dto/create-ticket-sale.dto';
import { UpdateTicketSaleDto } from './dto/update-ticket-sale.dto';

@Injectable()
export class TicketSaleService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTicketSaleDto) {
    return this.prisma.ticketSale.create({ data });
  }

  async findAll() {
    return this.prisma.ticketSale.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    return this.prisma.ticketSale.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateTicketSaleDto) {
    return this.prisma.ticketSale.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    return this.prisma.ticketSale.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
