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
exports.CostService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CostService = class CostService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const supplier = await this.prisma.supplier.findUnique({ where: { id: data.supplierId } });
        const product = await this.prisma.product.findUnique({ where: { id: data.productId } });
        if (!supplier || !product) {
            throw new common_1.NotFoundException('Proveedor o Producto no encontrado');
        }
        return this.prisma.cost.create({ data });
    }
    async findAll() {
        return this.prisma.cost.findMany({
            where: { deletedAt: null },
        });
    }
    async findOne(id) {
        const cost = await this.prisma.cost.findFirst({
            where: { id, deletedAt: null },
        });
        if (!cost)
            throw new common_1.NotFoundException('Costo no encontrado');
        return cost;
    }
    async update(id, data) {
        await this.findOne(id);
        return this.prisma.cost.update({
            where: { id },
            data,
        });
    }
    async softDelete(id) {
        await this.findOne(id);
        return this.prisma.cost.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
};
exports.CostService = CostService;
exports.CostService = CostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CostService);
//# sourceMappingURL=cost.service.js.map