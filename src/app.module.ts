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
import { BonusModule } from './bonus/bonus.module';
import { PenaltyChargeModule } from './penalty-charge/penalty-charge.module';
import { AttendanceTypeModule } from './attendance-type/attendance-type.module';
import { AttendanceModule } from './attendance/attendance.module';
import { SupplierModule } from './supplier/supplier.module';
import { CostModule } from './cost/cost.module';
import { ProductModule } from './product/product.module';
import { ExpenseTypeModule } from './expense-type/expense-type.module';
import { ExpenseModule } from './expense/expense.module';
import { ReportsModule } from './reports/reports.module';
import { TicketModule } from './ticket/ticket.module';
import { TicketSaleModule } from './ticket-sale/ticket-sale.module';
import { ProductSaleModule } from './product-sale/product-sale.module';
import { PriceModule } from './price/price.module';
import { DeliveryBranchModule } from './delivery-branch/delivery-branch.module';
import { RoutesDayModule } from './routes-day/routes-day.module';
import { RoutesDeliveryModule } from './routes-delivery/routes-delivery.module';
import { AreaModule } from './area/area.module';
import { PermissionsModule } from './permissions/permissions.module';

@Module({
  imports: [TaskModule, AuthModule, UsersModule, ProfileModule, SalaryModule, ClientModule, BranchModule, SaleModule, CommissionModule, BonusModule, PenaltyChargeModule, AttendanceTypeModule, AttendanceModule, SupplierModule, CostModule, ProductModule, ExpenseTypeModule, ExpenseModule, ReportsModule, TicketModule, TicketSaleModule, ProductSaleModule, PriceModule, DeliveryBranchModule, RoutesDayModule, RoutesDeliveryModule, AreaModule, PermissionsModule],
  controllers: [],

})
export class AppModule {}
