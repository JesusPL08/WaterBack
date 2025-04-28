import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async validateLogin(user: string, password: string) {
    const login = await this.prisma.login.findFirst({
      where: {
        user,
        deletedAt: null,
      },
      include: {
        userRel: true,
      },
    });

    if (!login) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    const passwordValid = await bcrypt.compare(password, login.password);

    if (!passwordValid) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    return login.userRel;
  }

  async login(credentials: { user: string; password: string }) {
    const user = await this.validateLogin(credentials.user, credentials.password);

    const payload = {
      sub: user.id,
      name: user.name,
      profileId: user.profileId,
      salaryId: user.salaryId,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}