import { IsInt, IsDateString, IsNumber, IsBoolean, IsString } from 'class-validator';

export class CreateAttendanceDto {
  @IsInt()
  userId: number;

  @IsDateString()
  date: Date;

  @IsInt()
  attendanceTypeId: number;

  @IsNumber()
  workedHours: number;

  @IsBoolean()
  paid: boolean;

  @IsString()
  notes: string;
}
