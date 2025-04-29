import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { SalaryModule } from './salary/salary.module';
import { ClientModule } from './client/client.module';
import { BranchModule } from './branch/branch.module';
import { SaleModule } from './sale/sale.module';
import { CommissionModule } from './commission/commission.module';
import { RouteModule } from './route/route.module';
import { BonusModule } from './bonus/bonus.module';
import { PenaltyChargeModule } from './penalty-charge/penalty-charge.module';
import { AttendanceTypeModule } from './attendance-type/attendance-type.module';
import { AttendanceModule } from './attendance/attendance.module';
import { SupplierModule } from './supplier/supplier.module';
import { CostModule } from './cost/cost.module';
import { ProductModule } from './product/product.module';
import { ExpenseTypeModule } from './expense-type/expense-type.module';
import { ExpenseModule } from './expense/expense.module';

@Module({
  imports: [TaskModule, AuthModule, UsersModule, ProfileModule, SalaryModule, ClientModule, BranchModule, SaleModule, CommissionModule, RouteModule, BonusModule, PenaltyChargeModule, AttendanceTypeModule, AttendanceModule, SupplierModule, CostModule, ProductModule, ExpenseTypeModule, ExpenseModule],
  controllers: [],

})
export class AppModule {}
