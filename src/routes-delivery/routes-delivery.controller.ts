import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RoutesDeliveryService } from './routes-delivery.service';
import { CreateRoutesDeliveryDto } from './dto/create-routes-delivery.dto';
import { UpdateRoutesDeliveryDto } from './dto/update-routes-delivery.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('routes-deliveries')
export class RoutesDeliveryController {
  constructor(private readonly routesDeliveryService: RoutesDeliveryService) {}

  @Post()
  create(@Body() createDto: CreateRoutesDeliveryDto) {
    return this.routesDeliveryService.create(createDto);
  }

  @Get()
  findAll() {
    return this.routesDeliveryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routesDeliveryService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateRoutesDeliveryDto) {
    return this.routesDeliveryService.update(+id, updateDto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.routesDeliveryService.softDelete(+id);
  }
}
