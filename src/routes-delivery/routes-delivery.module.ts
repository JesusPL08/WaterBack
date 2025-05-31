import { Module } from '@nestjs/common';
import { RoutesDeliveryService } from './routes-delivery.service';
import { RoutesDeliveryController } from './routes-delivery.controller';

@Module({
  providers: [RoutesDeliveryService],
  controllers: [RoutesDeliveryController]
})
export class RoutesDeliveryModule {}
