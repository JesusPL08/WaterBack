import { IsInt, IsPositive } from 'class-validator';

export class CreateSaleDto {
  @IsInt()
  @IsPositive()
  branchId: number;

  @IsInt()
  @IsPositive()
  commissionId: number;

  @IsInt()
  @IsPositive()
  userId: number;

  @IsInt()
  @IsPositive()
  volume: number;

  @IsInt()
  @IsPositive()
  productSaleId: number;
}
