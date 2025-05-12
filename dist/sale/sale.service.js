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
exports.SaleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SaleService = class SaleService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const branch = await this.prisma.branch.findUnique({ where: { id: data.branchId } });
        if (!branch)
            throw new common_1.NotFoundException('Sucursal no encontrada');
        const user = await this.prisma.user.findUnique({ where: { id: data.userId } });
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        const commission = await this.prisma.commission.findUnique({ where: { id: data.commissionId } });
        if (!commission)
            throw new common_1.NotFoundException('Comisión no encontrada');
        return this.prisma.sale.create({ data });
    }
    async findAll() {
        return this.prisma.sale.findMany({
            where: { deletedAt: null },
        });
    }
    async findOne(id) {
        const sale = await this.prisma.sale.findFirst({
            where: { id, deletedAt: null },
        });
        if (!sale)
            throw new common_1.NotFoundException('Venta no encontrada');
        return sale;
    }
    async update(id, data) {
        await this.findOne(id);
        return this.prisma.sale.update({
            where: { id },
            data,
        });
    }
    async softDelete(id) {
        await this.findOne(id);
        return this.prisma.sale.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
};
exports.SaleService = SaleService;
exports.SaleService = SaleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SaleService);
//# sourceMappingURL=sale.service.js.map