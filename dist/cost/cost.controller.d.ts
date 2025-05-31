import { CostService } from './cost.service';
import { CreateCostDto } from './dto/create-cost.dto';
import { UpdateCostDto } from './dto/update-cost.dto';
export declare class CostController {
    private readonly costService;
    constructor(costService: CostService);
    create(dto: CreateCostDto): Promise<{
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
    findOne(id: string): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        supplierId: number;
        productId: number;
    }>;
    update(id: string, dto: UpdateCostDto): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        supplierId: number;
        productId: number;
    }>;
    softDelete(id: string): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        supplierId: number;
        productId: number;
    }>;
}
