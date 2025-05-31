import { PrismaService } from '../../prisma/prisma.service';
export declare class LoginService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, user: string, password: string): Promise<{
        user: string;
        id: number;
        password: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    update(userId: number, data: {
        user?: string;
        password?: string;
    }): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
