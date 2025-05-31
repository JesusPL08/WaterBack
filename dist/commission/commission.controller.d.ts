import { CommissionService } from './commission.service';
import { CreateCommissionDto } from './dto/create-commission.dto';
import { UpdateCommissionDto } from './dto/update-commission.dto';
export declare class CommissionController {
    private readonly commissionService;
    constructor(commissionService: CommissionService);
    create(dto: CreateCommissionDto): Promise<{
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
    findOne(id: string): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        commissionSale: number;
        dateCreation: Date;
    }>;
    update(id: string, dto: UpdateCommissionDto): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        commissionSale: number;
        dateCreation: Date;
    }>;
    softDelete(id: string): Promise<{
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
