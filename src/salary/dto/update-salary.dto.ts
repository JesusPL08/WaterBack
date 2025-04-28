import { IsString, IsNumber } from 'class-validator';

export class UpdateSalaryDto {
  @IsString()
  name: string;

  @IsNumber()
  baseRate: number;
}
