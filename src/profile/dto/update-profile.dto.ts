
import { IsString, IsInt } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  name: string;

  @IsInt()
  rank: number;
}
