import { BonusService } from './bonus.service';
import { CreateBonusDto } from './dto/create-bonus.dto';
import { UpdateBonusDto } from './dto/update-bonus.dto';
export declare class BonusController {
    private readonly bonusService;
    constructor(bonusService: BonusService);
    create(dto: CreateBonusDto): Promise<{
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
    update(id: string, dto: UpdateBonusDto): Promise<{
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
