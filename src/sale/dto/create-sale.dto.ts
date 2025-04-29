import { IsInt, IsBoolean, IsString, IsDateString } from 'class-validator';

export class CreateSaleDto {
  @IsInt()
  branchId: number;

  @IsInt()
  commissionId: number;

  @IsInt()
  userId: number;

  @IsInt()
  volume: number;

  @IsInt()
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
