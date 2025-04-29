import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { PenaltyChargeService } from './penalty-charge.service';
import { CreatePenaltyChargeDto } from './dto/create-penalty-charge.dto';
import { UpdatePenaltyChargeDto } from './dto/update-penalty-charge.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('penalty-charges')
export class PenaltyChargeController {
  constructor(private readonly penaltyService: PenaltyChargeService) {}

  @Post()
  create(@Body() dto: CreatePenaltyChargeDto) {
    return this.penaltyService.create(dto);
  }

  @Get()
  findAll() {
    return this.penaltyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penaltyService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePenaltyChargeDto) {
    return this.penaltyService.update(+id, dto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.penaltyService.softDelete(+id);
  }
}
