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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionController = void 0;
const common_1 = require("@nestjs/common");
const commission_service_1 = require("./commission.service");
const create_commission_dto_1 = require("./dto/create-commission.dto");
const update_commission_dto_1 = require("./dto/update-commission.dto");
const passport_1 = require("@nestjs/passport");
let CommissionController = class CommissionController {
    commissionService;
    constructor(commissionService) {
        this.commissionService = commissionService;
    }
    create(dto) {
        return this.commissionService.create(dto);
    }
    findAll() {
        return this.commissionService.findAll();
    }
    findOne(id) {
        return this.commissionService.findOne(+id);
    }
    update(id, dto) {
        return this.commissionService.update(+id, dto);
    }
    softDelete(id) {
        return this.commissionService.softDelete(+id);
    }
};
exports.CommissionController = CommissionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_commission_dto_1.CreateCommissionDto]),
    __metadata("design:returntype", void 0)
], CommissionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommissionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommissionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_commission_dto_1.UpdateCommissionDto]),
    __metadata("design:returntype", void 0)
], CommissionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommissionController.prototype, "softDelete", null);
exports.CommissionController = CommissionController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('commissions'),
    __metadata("design:paramtypes", [commission_service_1.CommissionService])
], CommissionController);
//# sourceMappingURL=commission.controller.js.map