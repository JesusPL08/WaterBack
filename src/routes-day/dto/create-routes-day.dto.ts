import { IsBoolean,IsString, IsDateString } from 'class-validator';

export class CreateRoutesDayDto {
  @IsString()
  name?: string;
  @IsBoolean()
  status: boolean;

  @IsDateString()
  routeDay: Date;
}
