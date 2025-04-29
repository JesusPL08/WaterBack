import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { CostService } from './cost.service';
import { CreateCostDto } from './dto/create-cost.dto';
import { UpdateCostDto } from './dto/update-cost.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('costs')
export class CostController {
  constructor(private readonly costService: CostService) {}

  @Post()
  create(@Body() dto: CreateCostDto) {
    return this.costService.create(dto);
  }

  @Get()
  findAll() {
    return this.costService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCostDto) {
    return this.costService.update(+id, dto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.costService.softDelete(+id);
  }
}
