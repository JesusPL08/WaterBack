import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<{
        id: number;
        profileId: number;
        salaryId: number;
        name: string;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    findAll(): Promise<({
        logins: {
            user: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            password: string;
            userId: number;
        }[];
    } & {
        id: number;
        profileId: number;
        salaryId: number;
        name: string;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    })[]>;
    findOne(id: number): Promise<({
        logins: {
            user: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            password: string;
            userId: number;
        }[];
    } & {
        id: number;
        profileId: number;
        salaryId: number;
        name: string;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }) | null>;
    update(id: number, data: UpdateUserDto): Promise<{
        id: number;
        profileId: number;
        salaryId: number;
        name: string;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    softDelete(id: number): Promise<{
        id: number;
        profileId: number;
        salaryId: number;
        name: string;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
}
