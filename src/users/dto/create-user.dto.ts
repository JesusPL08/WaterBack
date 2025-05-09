import { IsString, IsInt, IsDateString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  rfc: string;

  @IsInt()
  profileId: number;

  @IsInt()
  salaryId: number;

  @IsDateString()
  hiringDate: Date;

  @IsOptional()
  @IsInt()
  branchId?: number;

  // 👇 Añadimos para login:
  @IsString()
  user: string;

  @IsString()
  password: string;
}
