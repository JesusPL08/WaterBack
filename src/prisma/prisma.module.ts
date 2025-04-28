import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // <- IMPORTANTE: con esto no tienes que importarlo cada vez manualmente
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
