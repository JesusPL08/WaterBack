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
exports.DeliveryBranchService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DeliveryBranchService = class DeliveryBranchService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.deliveryBranch.create({ data });
    }
    async findAll() {
        return this.prisma.deliveryBranch.findMany({
            where: { deletedAt: null },
        });
    }
    async findOne(id) {
        return this.prisma.deliveryBranch.findFirst({
            where: { id, deletedAt: null },
        });
    }
    async update(id, data) {
        return this.prisma.deliveryBranch.update({
            where: { id },
            data,
        });
    }
    async softDelete(id) {
        return this.prisma.deliveryBranch.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
};
exports.DeliveryBranchService = DeliveryBranchService;
exports.DeliveryBranchService = DeliveryBranchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DeliveryBranchService);
//# sourceMappingURL=delivery-branch.service.js.map