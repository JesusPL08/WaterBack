import { PartialType } from '@nestjs/mapped-types';
import { CreatePenaltyChargeDto } from './create-penalty-charge.dto';

export class UpdatePenaltyChargeDto extends PartialType(CreatePenaltyChargeDto) {}
