import { PrismaService } from '../prisma/prisma.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
export declare class ExpenseService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateExpenseDto): Promise<{
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
    findOne(id: number): Promise<{
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
    update(id: number, data: UpdateExpenseDto): Promise<{
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
    softDelete(id: number): Promise<{
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
