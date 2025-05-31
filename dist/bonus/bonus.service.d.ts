import { PrismaService } from '../prisma/prisma.service';
import { CreateBonusDto } from './dto/create-bonus.dto';
import { UpdateBonusDto } from './dto/update-bonus.dto';
export declare class BonusService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateBonusDto): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        amount: number;
        description: string;
        date: Date;
    }>;
    findAll(): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        amount: number;
        description: string;
        date: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        amount: number;
        description: string;
        date: Date;
    }>;
    update(id: number, data: UpdateBonusDto): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        amount: number;
        description: string;
        date: Date;
    }>;
    softDelete(id: number): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        amount: number;
        description: string;
        date: Date;
    }>;
}
