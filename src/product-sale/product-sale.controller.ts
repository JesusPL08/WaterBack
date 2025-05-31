import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProductSaleService } from './product-sale.service';
import { CreateProductSaleDto } from './dto/create-product-sale.dto';
import { UpdateProductSaleDto } from './dto/update-product-sale.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('product-sales')
export class ProductSaleController {
  constructor(private readonly productSaleService: ProductSaleService) {}

  @Post()
  create(@Body() createProductSaleDto: CreateProductSaleDto) {
    return this.productSaleService.create(createProductSaleDto);
  }

  @Get()
  findAll() {
    return this.productSaleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productSaleService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductSaleDto: UpdateProductSaleDto) {
    return this.productSaleService.update(+id, updateProductSaleDto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.productSaleService.softDelete(+id);
  }
}
