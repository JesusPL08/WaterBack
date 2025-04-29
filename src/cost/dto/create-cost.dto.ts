import { IsInt, IsNumber } from 'class-validator';

export class CreateCostDto {
  @IsNumber()
  price: number;

  @IsInt()
  supplierId: number;

  @IsInt()
  productId: number;
}
