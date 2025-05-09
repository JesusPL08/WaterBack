import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.usersService.softDelete(+id);
  }

  @Get(':id/salary-report')
  getSalaryReport(
    @Param('id') id: string,
    @Query('period') period: 'week' | 'month' | 'year',
    @Query('date') date?: string
  ) {
    const refDate = date ? new Date(date) : new Date();
    return this.usersService.getSalaryReport(+id, period, refDate);
  }
}
