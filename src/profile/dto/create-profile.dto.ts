import { IsString, IsInt, IsArray, IsOptional } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  name: string;

  @IsInt()
  rank: number;

  @IsOptional()
  @IsArray()
  permissions?: number[]; // IDs de permisos a asociar
}
