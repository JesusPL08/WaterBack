import { IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateProductSaleDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  brand: string;

  @IsString()
  type: string;

  @IsNumber()
  @IsPositive()
  price: number;
}
