import { PenaltyChargeService } from './penalty-charge.service';
import { CreatePenaltyChargeDto } from './dto/create-penalty-charge.dto';
import { UpdatePenaltyChargeDto } from './dto/update-penalty-charge.dto';
export declare class PenaltyChargeController {
    private readonly penaltyService;
    constructor(penaltyService: PenaltyChargeService);
    create(dto: CreatePenaltyChargeDto): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        amount: number;
        description: string;
        date: Date;
    }>;
    findAll(): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        amount: number;
        description: string;
        date: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        amount: number;
        description: string;
        date: Date;
    }>;
    update(id: string, dto: UpdatePenaltyChargeDto): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        amount: number;
        description: string;
        date: Date;
    }>;
    softDelete(id: string): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        amount: number;
        description: string;
        date: Date;
    }>;
}
