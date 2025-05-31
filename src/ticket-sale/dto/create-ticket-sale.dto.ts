import { IsInt, IsPositive } from 'class-validator';

export class CreateTicketSaleDto {
  @IsInt()
  @IsPositive()
  ticketId: number;

  @IsInt()
  @IsPositive()
  saleId: number;
}
