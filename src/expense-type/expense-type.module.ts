import { Module } from '@nestjs/common';
import { ExpenseTypeService } from './expense-type.service';
import { ExpenseTypeController } from './expense-type.controller';

@Module({
  providers: [ExpenseTypeService],
  controllers: [ExpenseTypeController]
})
export class ExpenseTypeModule {}
