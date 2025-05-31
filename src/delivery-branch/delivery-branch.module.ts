import { Module } from '@nestjs/common';
import { DeliveryBranchService } from './delivery-branch.service';
import { DeliveryBranchController } from './delivery-branch.controller';

@Module({
  providers: [DeliveryBranchService],
  controllers: [DeliveryBranchController]
})
export class DeliveryBranchModule {}
