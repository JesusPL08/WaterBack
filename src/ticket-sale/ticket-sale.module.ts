import { Module } from '@nestjs/common';
import { TicketSaleService } from './ticket-sale.service';
import { TicketSaleController } from './ticket-sale.controller';

@Module({
  providers: [TicketSaleService],
  controllers: [TicketSaleController]
})
export class TicketSaleModule {}
