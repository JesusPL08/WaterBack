import { PartialType } from '@nestjs/mapped-types';
import { CreateAttendanceTypeDto } from './create-attendance-type.dto';

export class UpdateAttendanceTypeDto extends PartialType(CreateAttendanceTypeDto) {}
