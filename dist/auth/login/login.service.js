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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = require("bcrypt");
let LoginService = class LoginService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return this.prisma.login.create({
            data: {
                userId: data.userId,
                user: data.user,
                password: hashedPassword,
            },
        });
    }
    async update(data) {
        const existing = await this.prisma.login.findFirst({
            where: { userId: data.userId },
        });
        if (!existing) {
            throw new common_1.NotFoundException('Login no encontrado');
        }
        const updatedData = {};
        if (data.user)
            updatedData.user = data.user;
        if (data.password) {
            updatedData.password = await bcrypt.hash(data.password, 10);
        }
        return this.prisma.login.updateMany({
            where: { userId: data.userId },
            data: updatedData,
        });
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LoginService);
//# sourceMappingURL=login.service.js.map