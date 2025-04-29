import { IsInt, IsDateString } from 'class-validator';

export class CreateRouteDto {
  @IsInt()
  branchId: number;

  @IsInt()
  priority: number;

  @IsInt()
  volume: number;

  @IsDateString()
  deliveryDate: Date;
}
