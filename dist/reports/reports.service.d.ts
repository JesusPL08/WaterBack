import { PrismaService } from '../prisma/prisma.service';
export declare class ReportsService {
    private prisma;
    constructor(prisma: PrismaService);
    getSalaryReport(userId: number, period: 'week' | 'month' | 'year', referenceDate?: Date): Promise<{
        user: string;
        baseRate: number;
        workedDays: number;
        salaryEarned: number;
        totalBonuses: number;
        totalPenalties: number;
        totalEarned: number;
        period: "week" | "month" | "year";
        dateRange: {
            start: Date;
            end: Date;
        };
    }>;
    getAllSalaryReports(period: 'week' | 'month' | 'year', referenceDate?: Date): Promise<any[]>;
}
