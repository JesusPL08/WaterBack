import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    create(createTicketDto: CreateTicketDto): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateTicketDto: UpdateTicketDto): Promise<{
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
    softDelete(id: string): Promise<{
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
