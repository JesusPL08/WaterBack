import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private jwtService;
    private prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    validateLogin(user: string, password: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        profileId: number;
        salaryId: number;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
    }>;
    login(credentials: {
        user: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
}
