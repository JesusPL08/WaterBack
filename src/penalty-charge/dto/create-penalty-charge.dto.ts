import { IsInt, IsNumber, IsString, IsDateString } from 'class-validator';

export class CreatePenaltyChargeDto {
  @IsInt()
  userId: number;

  @IsNumber()
  amount: number;

  @IsString()
  description: string;

  @IsDateString()
  date: Date;
}
