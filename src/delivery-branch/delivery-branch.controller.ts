import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeliveryBranchService } from './delivery-branch.service';
import { CreateDeliveryBranchDto } from './dto/create-delivery-branch.dto';
import { UpdateDeliveryBranchDto } from './dto/update-delivery-branch.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('delivery-branches')
export class DeliveryBranchController {
  constructor(private readonly deliveryBranchService: DeliveryBranchService) {}

  @Post()
  create(@Body() createDto: CreateDeliveryBranchDto) {
    return this.deliveryBranchService.create(createDto);
  }

  @Get()
  findAll() {
    return this.deliveryBranchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryBranchService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateDeliveryBranchDto) {
    return this.deliveryBranchService.update(+id, updateDto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.deliveryBranchService.softDelete(+id);
  }
}
