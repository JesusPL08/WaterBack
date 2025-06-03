import { IsString, IsInt, IsDateString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  rfc?: string;

  @IsOptional()
  @IsInt()
  profileId?: number;

  @IsOptional()
  @IsInt()
  salaryId?: number;

  @IsOptional()
  @IsDateString()
  hiringDate?: Date;

  @IsOptional()
  @IsInt()
  branchId?: number;
}
