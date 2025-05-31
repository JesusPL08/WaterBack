import { IsInt, IsPositive } from 'class-validator';

export class CreateRoutesDeliveryDto {
  @IsInt()
  @IsPositive()
  deliveryBranchId: number;

  @IsInt()
  @IsPositive()
  routesDayId: number;
}
