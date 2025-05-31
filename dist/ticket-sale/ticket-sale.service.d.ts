import { PrismaService } from '../prisma/prisma.service';
import { CreateTicketSaleDto } from './dto/create-ticket-sale.dto';
import { UpdateTicketSaleDto } from './dto/update-ticket-sale.dto';
export declare class TicketSaleService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateTicketSaleDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ticketId: number;
        saleId: number;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ticketId: number;
        saleId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ticketId: number;
        saleId: number;
    } | null>;
    update(id: number, data: UpdateTicketSaleDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ticketId: number;
        saleId: number;
    }>;
    softDelete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ticketId: number;
        saleId: number;
    }>;
}
