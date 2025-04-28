import { IsString, IsInt } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  name: string;

  @IsInt()
  rank: number;
}
