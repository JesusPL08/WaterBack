import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<{
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
    findAll(): Promise<{
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
    }[]>;
    findOne(id: number): Promise<{
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
    } | null>;
    update(id: number, data: UpdateUserDto): Promise<{
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
    softDelete(id: number): Promise<{
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
    getSalaryReport(userId: number, period: 'week' | 'month' | 'year', referenceDate?: Date): Promise<{
        user: string;
        totalHours: number;
        hourlySalary: number;
        totalEarned: number;
        period: "week" | "month" | "year";
        dateRange: {
            start: Date;
            end: Date;
        };
    }>;
}
