import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TicketSaleService } from './ticket-sale.service';
import { CreateTicketSaleDto } from './dto/create-ticket-sale.dto';
import { UpdateTicketSaleDto } from './dto/update-ticket-sale.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('ticket-sales')
export class TicketSaleController {
  constructor(private readonly ticketSaleService: TicketSaleService) {}

  @Post()
  create(@Body() createTicketSaleDto: CreateTicketSaleDto) {
    return this.ticketSaleService.create(createTicketSaleDto);
  }

  @Get()
  findAll() {
    return this.ticketSaleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketSaleService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTicketSaleDto: UpdateTicketSaleDto) {
    return this.ticketSaleService.update(+id, updateTicketSaleDto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.ticketSaleService.softDelete(+id);
  }
}
