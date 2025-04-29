import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ExpenseTypeService } from './expense-type.service';
import { CreateExpenseTypeDto } from './dto/create-expense-type.dto';
import { UpdateExpenseTypeDto } from './dto/update-expense-type.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('expense-types')
export class ExpenseTypeController {
  constructor(private readonly expenseTypeService: ExpenseTypeService) {}

  @Post()
  create(@Body() dto: CreateExpenseTypeDto) {
    return this.expenseTypeService.create(dto);
  }

  @Get()
  findAll() {
    return this.expenseTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expenseTypeService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateExpenseTypeDto) {
    return this.expenseTypeService.update(+id, dto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.expenseTypeService.softDelete(+id);
  }
}
