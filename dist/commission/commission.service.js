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
exports.CommissionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CommissionService = class CommissionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const user = await this.prisma.user.findUnique({ where: { id: data.userId } });
        const branch = await this.prisma.branch.findUnique({ where: { id: data.branchId } });
        if (!user || !branch) {
            throw new common_1.NotFoundException('Usuario o Sucursal no encontrados');
        }
        return this.prisma.commission.create({ data });
    }
    async findAll() {
        return this.prisma.commission.findMany({ where: { deletedAt: null } });
    }
    async findOne(id) {
        const commission = await this.prisma.commission.findFirst({
            where: { id, deletedAt: null },
        });
        if (!commission)
            throw new common_1.NotFoundException('Comisión no encontrada');
        return commission;
    }
    async update(id, data) {
        await this.findOne(id);
        return this.prisma.commission.update({
            where: { id },
            data,
        });
    }
    async softDelete(id) {
        await this.findOne(id);
        return this.prisma.commission.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
};
exports.CommissionService = CommissionService;
exports.CommissionService = CommissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommissionService);
//# sourceMappingURL=commission.service.js.map