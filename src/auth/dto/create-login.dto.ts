import { IsString, IsInt } from 'class-validator';

export class CreateLoginDto {
  @IsInt()
  userId: number;

  @IsString()
  user: string;

  @IsString()
  password: string;
}
