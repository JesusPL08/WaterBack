import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { AttendanceTypeService } from './attendance-type.service';
import { CreateAttendanceTypeDto } from './dto/create-attendance-type.dto';
import { UpdateAttendanceTypeDto } from './dto/update-attendance-type.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('attendance-types')
export class AttendanceTypeController {
  constructor(private readonly attendanceTypeService: AttendanceTypeService) {}

  @Post()
  create(@Body() dto: CreateAttendanceTypeDto) {
    return this.attendanceTypeService.create(dto);
  }

  @Get()
  findAll() {
    return this.attendanceTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attendanceTypeService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAttendanceTypeDto) {
    return this.attendanceTypeService.update(+id, dto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.attendanceTypeService.softDelete(+id);
  }
}
