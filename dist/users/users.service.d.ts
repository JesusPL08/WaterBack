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
    findAll(): Promise<({
        logins: {
            user: string;
            id: number;
            password: string;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        }[];
    } & {
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
    })[]>;
    findOne(id: number): Promise<({
        logins: {
            user: string;
            id: number;
            password: string;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        }[];
    } & {
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
    }) | null>;
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
}
