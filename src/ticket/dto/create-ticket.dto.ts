import { IsInt, IsBoolean, IsString, IsDateString, IsPositive } from 'class-validator';

export class CreateTicketDto {
  @IsInt()
  @IsPositive()
  branchId: number;

  @IsInt()
  @IsPositive()
  payType: number;

  @IsBoolean()
  invoiced: boolean;

  @IsString()
  uuid: string;

  @IsDateString()
  invoiceDate: Date;

  @IsString()
  folio: string;
}
