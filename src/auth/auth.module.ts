import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthController } from './auth.controller';
import { LoginService } from './login/login.service';
import { LoginController } from './login/login.controller';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'secretKeySuperSecreta',
      signOptions: { expiresIn: '24h' },
    }),
    PrismaModule,
  ],
  controllers: [AuthController, LoginController],
  providers: [AuthService, JwtStrategy, LoginService],
  exports: [AuthService],
})
export class AuthModule {}