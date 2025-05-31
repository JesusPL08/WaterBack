import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryBranchDto } from './create-delivery-branch.dto';

export class UpdateDeliveryBranchDto extends PartialType(CreateDeliveryBranchDto) {}
