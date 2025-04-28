import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'; 
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}


async create(data: CreateUserDto) {
  const { user, password, ...userData } = data;

  // Primero crear el User
  const createdUser = await this.prisma.user.create({
    data: userData,
  });

  // Hashear el password
  const hashedPassword = await bcrypt.hash(password, 10); // 10 = salt rounds (seguro)

  // Luego crear su Login relacionado
  await this.prisma.login.create({
    data: {
      user,
      password: hashedPassword,
      userId: createdUser.id,
    },
  });

  return createdUser;
}

  async findAll() {
    return this.prisma.user.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    return this.prisma.user.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    return this.prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

}
