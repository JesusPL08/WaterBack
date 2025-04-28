import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { SalaryModule } from './salary/salary.module';

@Module({
  imports: [TaskModule, AuthModule, UsersModule, ProfileModule, SalaryModule],
  controllers: [],

})
export class AppModule {}
