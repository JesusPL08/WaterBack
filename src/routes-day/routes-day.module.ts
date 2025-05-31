import { Module } from '@nestjs/common';
import { RoutesDayService } from './routes-day.service';
import { RoutesDayController } from './routes-day.controller';

@Module({
  providers: [RoutesDayService],
  controllers: [RoutesDayController]
})
export class RoutesDayModule {}
