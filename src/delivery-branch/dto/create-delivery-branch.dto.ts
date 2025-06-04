import { IsInt, IsPositive, IsOptional } from 'class-validator';

export class CreateDeliveryBranchDto {
  @IsInt()
  @IsPositive()
  userId: number;

  @IsInt()
  @IsPositive()
  branchId: number;

  @IsInt()
  @IsPositive()
  priority: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  ticketId?: number;

  @IsInt()
  @IsPositive()
  status: number;
}
