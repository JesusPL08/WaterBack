"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const date_fns_1 = require("date-fns");
let ReportsService = class ReportsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getSalaryReport(userId, period, referenceDate = new Date()) {
        if (!userId || isNaN(userId)) {
            throw new Error('ID inválido recibido');
        }
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { salary: true },
        });
        if (!user || !user.salary) {
            throw new common_1.NotFoundException('Usuario o salario no encontrado');
        }
        let dateRange = { start: new Date(), end: new Date() };
        if (period === 'week') {
            dateRange.start = (0, date_fns_1.startOfWeek)(referenceDate, { weekStartsOn: 1 });
            dateRange.end = (0, date_fns_1.endOfWeek)(referenceDate, { weekStartsOn: 1 });
        }
        else if (period === 'month') {
            dateRange.start = (0, date_fns_1.startOfMonth)(referenceDate);
            dateRange.end = (0, date_fns_1.endOfMonth)(referenceDate);
        }
        else if (period === 'year') {
            dateRange.start = (0, date_fns_1.startOfYear)(referenceDate);
            dateRange.end = (0, date_fns_1.endOfYear)(referenceDate);
        }
        const allAttendances = await this.prisma.attendance.findMany({
            where: {
                userId,
                paid: true,
                deletedAt: null,
            },
        });
        const attendances = allAttendances.filter(att => {
            const attDate = new Date(att.date);
            return attDate >= dateRange.start && attDate <= dateRange.end;
        });
        const uniqueDays = new Set(attendances.map(att => new Date(att.date).toISOString().split('T')[0]));
        const workedDays = uniqueDays.size;
        const salaryEarned = workedDays * user.salary.baseRate;
        const bonuses = await this.prisma.bonus.findMany({
            where: {
                userId,
                date: {
                    gte: dateRange.start,
                    lte: dateRange.end,
                },
                deletedAt: null,
            },
        });
        const totalBonuses = bonuses.reduce((sum, b) => sum + b.amount, 0);
        const penalties = await this.prisma.penaltyCharge.findMany({
            where: {
                userId,
                date: {
                    gte: dateRange.start,
                    lte: dateRange.end,
                },
                deletedAt: null,
            },
        });
        const totalPenalties = penalties.reduce((sum, p) => sum + p.amount, 0);
        const totalEarned = salaryEarned + totalBonuses - totalPenalties;
        return {
            user: user.name,
            baseRate: user.salary.baseRate,
            workedDays,
            salaryEarned,
            totalBonuses,
            totalPenalties,
            totalEarned,
            period,
            dateRange,
        };
    }
    async getAllSalaryReports(period, referenceDate = new Date()) {
        const users = await this.prisma.user.findMany({
            where: {
                deletedAt: null,
                salaryId: { not: undefined }
            },
            include: { salary: true }
        });
        const results = [];
        for (const user of users) {
            const report = await this.getSalaryReport(user.id, period, referenceDate);
            results.push(report);
        }
        return results;
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportsService);
//# sourceMappingURL=reports.service.js.map