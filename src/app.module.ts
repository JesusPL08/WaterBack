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

@Module({
  imports: [TaskModule, AuthModule, UsersModule, ProfileModule, SalaryModule, ClientModule, BranchModule, SaleModule, CommissionModule, RouteModule],
  controllers: [],

})
export class AppModule {}
