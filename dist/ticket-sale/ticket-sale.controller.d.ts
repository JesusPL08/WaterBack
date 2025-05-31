import { TicketSaleService } from './ticket-sale.service';
import { CreateTicketSaleDto } from './dto/create-ticket-sale.dto';
import { UpdateTicketSaleDto } from './dto/update-ticket-sale.dto';
export declare class TicketSaleController {
    private readonly ticketSaleService;
    constructor(ticketSaleService: TicketSaleService);
    create(createTicketSaleDto: CreateTicketSaleDto): Promise<{
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
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ticketId: number;
        saleId: number;
    } | null>;
    update(id: string, updateTicketSaleDto: UpdateTicketSaleDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ticketId: number;
        saleId: number;
    }>;
    softDelete(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ticketId: number;
        saleId: number;
    }>;
}
