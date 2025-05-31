import { PartialType } from '@nestjs/mapped-types';
import { CreateRoutesDayDto } from './create-routes-day.dto';

export class UpdateRoutesDayDto extends PartialType(CreateRoutesDayDto) {}
