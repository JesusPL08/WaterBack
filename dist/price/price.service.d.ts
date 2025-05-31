import { PrismaService } from '../prisma/prisma.service';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
export declare class PriceService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePriceDto): Promise<{
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
    findOne(id: number): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        productSaleId: number;
        description: string;
        tax: number;
    } | null>;
    update(id: number, data: UpdatePriceDto): Promise<{
        price: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        productSaleId: number;
        description: string;
        tax: number;
    }>;
    softDelete(id: number): Promise<{
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
