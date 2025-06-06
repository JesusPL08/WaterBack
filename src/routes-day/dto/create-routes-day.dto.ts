import { IsBoolean, IsString, IsDateString } from 'class-validator';

export class CreateRoutesDayDto {
  @IsString()
  name: string; // ← sin el "?" porque es obligatorio

  @IsBoolean()
  status: boolean;

  @IsDateString()
  routeDay: Date;
}
