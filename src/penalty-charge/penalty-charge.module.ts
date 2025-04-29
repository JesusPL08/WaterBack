import { Module } from '@nestjs/common';
import { PenaltyChargeService } from './penalty-charge.service';
import { PenaltyChargeController } from './penalty-charge.controller';

@Module({
  providers: [PenaltyChargeService],
  controllers: [PenaltyChargeController]
})
export class PenaltyChargeModule {}
