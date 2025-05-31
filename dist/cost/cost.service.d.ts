import { PrismaService } from '../prisma/prisma.service';
import { CreateCostDto } from './dto/create-cost.dto';
import { UpdateCostDto } from './dto/update-cost.dto';
export declare class CostService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateCostDto): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        supplierId: number;
        productId: number;
    }>;
    findAll(): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        supplierId: number;
        productId: number;
    }[]>;
    findOne(id: number): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        supplierId: number;
        productId: number;
    }>;
    update(id: number, data: UpdateCostDto): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        supplierId: number;
        productId: number;
    }>;
    softDelete(id: number): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        supplierId: number;
        productId: number;
    }>;
}
