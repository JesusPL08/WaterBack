import { IsString, IsNumber } from 'class-validator';

export class CreateSalaryDto {
  @IsString()
  name: string;

  @IsNumber()
  baseRate: number;
}
