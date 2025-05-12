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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const date_fns_1 = require("date-fns");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const { user, password, ...userData } = data;
        const createdUser = await this.prisma.user.create({
            data: userData,
        });
        const hashedPassword = await bcrypt.hash(password, 10);
        await this.prisma.login.create({
            data: {
                user,
                password: hashedPassword,
                userId: createdUser.id,
            },
        });
        return createdUser;
    }
    async findAll() {
        return this.prisma.user.findMany({
            where: { deletedAt: null },
        });
    }
    async findOne(id) {
        return this.prisma.user.findFirst({
            where: { id, deletedAt: null },
        });
    }
    async update(id, data) {
        return this.prisma.user.update({
            where: { id },
            data,
        });
    }
    async softDelete(id) {
        return this.prisma.user.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
    async getSalaryReport(userId, period, referenceDate = new Date()) {
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
        const attendances = await this.prisma.attendance.findMany({
            where: {
                userId,
                date: {
                    gte: dateRange.start,
                    lte: dateRange.end,
                },
                deletedAt: null,
            },
        });
        const totalHours = attendances.reduce((acc, att) => acc + att.workedHours, 0);
        const monthlySalary = user.salary.baseRate;
        const hourlySalary = monthlySalary / (4 * 40);
        const totalEarned = totalHours * hourlySalary;
        return {
            user: user.name,
            totalHours,
            hourlySalary,
            totalEarned,
            period,
            dateRange,
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map