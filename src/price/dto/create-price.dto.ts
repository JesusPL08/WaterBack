import { IsString, IsNumber, IsPositive } from 'class-validator';

export class CreatePriceDto {
  @IsString()
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  tax: number;

  @IsNumber()
  @IsPositive()
  productSaleId: number;
}
