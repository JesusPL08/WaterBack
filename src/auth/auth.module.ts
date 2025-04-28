import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from '../prisma/prisma.module'; // <-- IMPORTANTE
import { AuthController } from './auth.controller';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'secretKeySuperSecreta',
      signOptions: { expiresIn: '24h' },
    }),
    PrismaModule,
  ],
  controllers: [AuthController], // <-- Aquí agregar
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}