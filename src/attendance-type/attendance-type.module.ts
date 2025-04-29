import { Module } from '@nestjs/common';
import { AttendanceTypeService } from './attendance-type.service';
import { AttendanceTypeController } from './attendance-type.controller';

@Module({
  providers: [AttendanceTypeService],
  controllers: [AttendanceTypeController]
})
export class AttendanceTypeModule {}
