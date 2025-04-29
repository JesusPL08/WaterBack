import { IsInt, IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateBonusDto {
  @IsInt()
  userId: number;

  @IsNumber()
  amount: number;

  @IsString()
  description: string;

  @IsDateString()
  date: Date;
}
