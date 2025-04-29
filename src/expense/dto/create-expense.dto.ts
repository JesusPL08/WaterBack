import { IsInt, IsNumber, IsDateString } from 'class-validator';

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
}
