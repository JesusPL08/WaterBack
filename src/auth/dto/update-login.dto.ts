import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateLoginDto {
  @IsInt()
  userId: number;

  @IsOptional()
  @IsString()
  user?: string;

  @IsOptional()
  @IsString()
  password?: string;
}
