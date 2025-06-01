import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLoginDto } from '../dto/create-login.dto';
import { UpdateLoginDto } from '../dto/update-login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateLoginDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.prisma.login.create({
      data: {
        userId: data.userId,
        user: data.user,
        password: hashedPassword,
      },
    });
  }

  async update(data: UpdateLoginDto) {
    const existing = await this.prisma.login.findFirst({
      where: { userId: data.userId },
    });

    if (!existing) {
      throw new NotFoundException('Login no encontrado');
    }

    const updatedData: any = {};
    if (data.user) updatedData.user = data.user;
    if (data.password) {
      updatedData.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.login.updateMany({
      where: { userId: data.userId },
      data: updatedData,
    });
  }
  async findByUserId(userId: number) {
  const login = await this.prisma.login.findFirst({
    where: { userId },
  });

  if (!login) {
    throw new NotFoundException('Login no encontrado');
  }

  return login;
}
async updatePassword(userId: number, password: string) {
  const existing = await this.prisma.login.findFirst({
    where: { userId },
  });

  if (!existing) {
    throw new NotFoundException('Login no encontrado');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return this.prisma.login.updateMany({
    where: { userId },
    data: { password: hashedPassword },
  });
}

}
