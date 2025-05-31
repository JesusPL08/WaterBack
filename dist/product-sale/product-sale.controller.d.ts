import { ProductSaleService } from './product-sale.service';
import { CreateProductSaleDto } from './dto/create-product-sale.dto';
import { UpdateProductSaleDto } from './dto/update-product-sale.dto';
export declare class ProductSaleController {
    private readonly productSaleService;
    constructor(productSaleService: ProductSaleService);
    create(createProductSaleDto: CreateProductSaleDto): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        description: string;
        brand: string;
        type: string;
    }>;
    findAll(): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        description: string;
        brand: string;
        type: string;
    }[]>;
    findOne(id: string): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        description: string;
        brand: string;
        type: string;
    } | null>;
    update(id: string, updateProductSaleDto: UpdateProductSaleDto): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        description: string;
        brand: string;
        type: string;
    }>;
    softDelete(id: string): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        description: string;
        brand: string;
        type: string;
    }>;
}
