import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { BonusService } from './bonus.service';
import { CreateBonusDto } from './dto/create-bonus.dto';
import { UpdateBonusDto } from './dto/update-bonus.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('bonuses')
export class BonusController {
  constructor(private readonly bonusService: BonusService) {}

  @Post()
  create(@Body() dto: CreateBonusDto) {
    return this.bonusService.create(dto);
  }

  @Get()
  findAll() {
    return this.bonusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bonusService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBonusDto) {
    return this.bonusService.update(+id, dto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.bonusService.softDelete(+id);
  }
}
