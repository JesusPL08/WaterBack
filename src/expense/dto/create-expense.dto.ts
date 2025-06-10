import { IsInt, IsNumber, IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateExpenseDto {
  @IsInt()
  costId: number;

  @IsInt()
  expenseTypeId: number;

  @IsInt()
  units: number;

  @IsNumber()
  total: number;

  @IsDateString()
  date: Date;

  @IsOptional()
  @IsString()
  filePath?: string;
}
