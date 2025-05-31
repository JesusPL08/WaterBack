import { PrismaService } from '../prisma/prisma.service';
import { CreatePenaltyChargeDto } from './dto/create-penalty-charge.dto';
import { UpdatePenaltyChargeDto } from './dto/update-penalty-charge.dto';
export declare class PenaltyChargeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePenaltyChargeDto): Promise<{
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
    update(id: number, data: UpdatePenaltyChargeDto): Promise<{
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
