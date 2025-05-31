import { PrismaService } from '../prisma/prisma.service';
import { CreateCommissionDto } from './dto/create-commission.dto';
import { UpdateCommissionDto } from './dto/update-commission.dto';
export declare class CommissionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateCommissionDto): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        commissionSale: number;
        dateCreation: Date;
    }>;
    findAll(): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        commissionSale: number;
        dateCreation: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        commissionSale: number;
        dateCreation: Date;
    }>;
    update(id: number, data: UpdateCommissionDto): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        commissionSale: number;
        dateCreation: Date;
    }>;
    softDelete(id: number): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        commissionSale: number;
        dateCreation: Date;
    }>;
}
