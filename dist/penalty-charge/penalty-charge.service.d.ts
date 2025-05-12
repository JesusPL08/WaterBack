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
        date: Date;
        amount: number;
        description: string;
    }>;
    findAll(): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        date: Date;
        amount: number;
        description: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        date: Date;
        amount: number;
        description: string;
    }>;
    update(id: number, data: UpdatePenaltyChargeDto): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        date: Date;
        amount: number;
        description: string;
    }>;
    softDelete(id: number): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        date: Date;
        amount: number;
        description: string;
    }>;
}
