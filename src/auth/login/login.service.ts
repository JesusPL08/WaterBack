import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, user: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prisma.login.create({
      data: {
        user,
        password: hashedPassword,
        userId,
      },
    });
  }

  async update(userId: number, data: { user?: string; password?: string }) {
    const loginData: any = {};

    if (data.user) loginData.user = data.user;
    if (data.password) {
      loginData.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.login.updateMany({
      where: { userId },
      data: loginData,
    });
  }
}
