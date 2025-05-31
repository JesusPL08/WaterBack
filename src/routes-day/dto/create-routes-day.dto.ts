import { IsBoolean, IsDateString } from 'class-validator';

export class CreateRoutesDayDto {
  @IsBoolean()
  status: boolean;

  @IsDateString()
  routeDay: Date;
}
