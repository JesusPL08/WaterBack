import { PrismaService } from '../prisma/prisma.service';
import { CreateProductSaleDto } from './dto/create-product-sale.dto';
import { UpdateProductSaleDto } from './dto/update-product-sale.dto';
export declare class ProductSaleService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProductSaleDto): Promise<{
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
    findOne(id: number): Promise<{
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
    update(id: number, data: UpdateProductSaleDto): Promise<{
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
    softDelete(id: number): Promise<{
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
