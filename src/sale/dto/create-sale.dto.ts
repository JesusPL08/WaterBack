import { IsInt, IsPositive,IsOptional } from 'class-validator';

export class CreateSaleDto {
  @IsInt()
  @IsPositive()
  branchId: number;

  @IsInt()
 @IsOptional()
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
