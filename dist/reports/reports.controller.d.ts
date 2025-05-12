import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    getUserSalary(id: string, period: 'week' | 'month' | 'year', date?: string): Promise<{
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
    getAllSalaryReports(period: 'week' | 'month' | 'year', date?: string): Promise<any[]>;
}
