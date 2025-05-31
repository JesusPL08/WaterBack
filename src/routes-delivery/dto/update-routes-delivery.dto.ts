import { PartialType } from '@nestjs/mapped-types';
import { CreateRoutesDeliveryDto } from './create-routes-delivery.dto';

export class UpdateRoutesDeliveryDto extends PartialType(CreateRoutesDeliveryDto) {}
