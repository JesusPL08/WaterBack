import { PrismaService } from '../../prisma/prisma.service';
import { CreateLoginDto } from '../dto/create-login.dto';
import { UpdateLoginDto } from '../dto/update-login.dto';
export declare class LoginService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateLoginDto): Promise<{
        user: string;
        id: number;
        password: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    update(data: UpdateLoginDto): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
