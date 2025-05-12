import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
export declare class ExpenseController {
    private readonly expenseService;
    constructor(expenseService: ExpenseService);
    create(dto: CreateExpenseDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        date: Date;
        costId: number;
        expenseTypeId: number;
        units: number;
        total: number;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        date: Date;
        costId: number;
        expenseTypeId: number;
        units: number;
        total: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        date: Date;
        costId: number;
        expenseTypeId: number;
        units: number;
        total: number;
    }>;
    update(id: string, dto: UpdateExpenseDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        date: Date;
        costId: number;
        expenseTypeId: number;
        units: number;
        total: number;
    }>;
    softDelete(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        date: Date;
        costId: number;
        expenseTypeId: number;
        units: number;
        total: number;
    }>;
}
