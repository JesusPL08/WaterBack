import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  create(@Body() dto: CreateExpenseDto) {
    return this.expenseService.create(dto);
  }

  @Get()
  findAll() {
    return this.expenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expenseService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateExpenseDto) {
    return this.expenseService.update(+id, dto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.expenseService.softDelete(+id);
  }
}
