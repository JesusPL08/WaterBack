import { Module } from '@nestjs/common';
import { ProductSaleService } from './product-sale.service';
import { ProductSaleController } from './product-sale.controller';

@Module({
  providers: [ProductSaleService],
  controllers: [ProductSaleController]
})
export class ProductSaleModule {}
