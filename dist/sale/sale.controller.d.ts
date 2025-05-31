import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
export declare class SaleController {
    private readonly saleService;
    constructor(saleService: SaleService);
    create(createSaleDto: CreateSaleDto): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateSaleDto: UpdateSaleDto): Promise<{
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
    softDelete(id: string): Promise<{
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
