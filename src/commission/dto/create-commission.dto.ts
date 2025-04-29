import { IsInt, IsNumber, IsDateString } from 'class-validator';

export class CreateCommissionDto {
  @IsInt()
  branchId: number;

  @IsInt()
  userId: number;

  @IsNumber()
  commissionSale: number;

  @IsInt()
  volume: number;

  @IsDateString()
  dateCreation: Date;
}
