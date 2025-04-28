import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';

@Controller('salaries')
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) {}

  @Post()
  create(@Body() createSalaryDto: CreateSalaryDto) {
    return this.salaryService.create(createSalaryDto);
  }

  @Get()
  findAll() {
    return this.salaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salaryService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSalaryDto: UpdateSalaryDto) {
    return this.salaryService.update(+id, updateSalaryDto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.salaryService.softDelete(+id);
  }
}
