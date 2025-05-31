import { PrismaService } from '../prisma/prisma.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
export declare class SaleService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateSaleDto): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        commissionId: number;
        volume: number;
        productSaleId: number;
    }>;
    findAll(): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        commissionId: number;
        volume: number;
        productSaleId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        commissionId: number;
        volume: number;
        productSaleId: number;
    }>;
    update(id: number, data: UpdateSaleDto): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        commissionId: number;
        volume: number;
        productSaleId: number;
    }>;
    softDelete(id: number): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        commissionId: number;
        volume: number;
        productSaleId: number;
    }>;
}
