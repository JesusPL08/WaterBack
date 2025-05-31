import { PriceService } from './price.service';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
export declare class PriceController {
    private readonly priceService;
    constructor(priceService: PriceService);
    create(createPriceDto: CreatePriceDto): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        productSaleId: number;
        description: string;
        tax: number;
    }>;
    findAll(): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        productSaleId: number;
        description: string;
        tax: number;
    }[]>;
    findOne(id: string): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        productSaleId: number;
        description: string;
        tax: number;
    } | null>;
    update(id: string, updatePriceDto: UpdatePriceDto): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        productSaleId: number;
        description: string;
        tax: number;
    }>;
    softDelete(id: string): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        productSaleId: number;
        description: string;
        tax: number;
    }>;
}
