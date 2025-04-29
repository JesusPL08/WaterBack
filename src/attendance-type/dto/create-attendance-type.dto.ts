import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateAttendanceTypeDto {
  @IsString()
  name: string;

  @IsBoolean()
  paidDay: boolean;

  @IsNumber()
  payMult: number;
}
