import { PrismaService } from '../prisma/prisma.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
export declare class TicketService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateTicketDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        payType: number;
        invoiced: boolean;
        uuid: string;
        invoiceDate: Date;
        folio: string;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        payType: number;
        invoiced: boolean;
        uuid: string;
        invoiceDate: Date;
        folio: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        payType: number;
        invoiced: boolean;
        uuid: string;
        invoiceDate: Date;
        folio: string;
    } | null>;
    update(id: number, data: UpdateTicketDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        payType: number;
        invoiced: boolean;
        uuid: string;
        invoiceDate: Date;
        folio: string;
    }>;
    softDelete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        payType: number;
        invoiced: boolean;
        uuid: string;
        invoiceDate: Date;
        folio: string;
    }>;
}
