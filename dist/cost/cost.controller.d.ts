import { CostService } from './cost.service';
import { CreateCostDto } from './dto/create-cost.dto';
import { UpdateCostDto } from './dto/update-cost.dto';
export declare class CostController {
    private readonly costService;
    constructor(costService: CostService);
    create(dto: CreateCostDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        price: number;
        supplierId: number;
        productId: number;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        price: number;
        supplierId: number;
        productId: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        price: number;
        supplierId: number;
        productId: number;
    }>;
    update(id: string, dto: UpdateCostDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        price: number;
        supplierId: number;
        productId: number;
    }>;
    softDelete(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        price: number;
        supplierId: number;
        productId: number;
    }>;
}
