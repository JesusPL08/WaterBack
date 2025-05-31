import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RoutesDayService } from './routes-day.service';
import { CreateRoutesDayDto } from './dto/create-routes-day.dto';
import { UpdateRoutesDayDto } from './dto/update-routes-day.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('routes-days')
export class RoutesDayController {
  constructor(private readonly routesDayService: RoutesDayService) {}

  @Post()
  create(@Body() createDto: CreateRoutesDayDto) {
    return this.routesDayService.create(createDto);
  }

  @Get()
  findAll() {
    return this.routesDayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routesDayService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateRoutesDayDto) {
    return this.routesDayService.update(+id, updateDto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.routesDayService.softDelete(+id);
  }
}
