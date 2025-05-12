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
exports.PenaltyChargeController = void 0;
const common_1 = require("@nestjs/common");
const penalty_charge_service_1 = require("./penalty-charge.service");
const create_penalty_charge_dto_1 = require("./dto/create-penalty-charge.dto");
const update_penalty_charge_dto_1 = require("./dto/update-penalty-charge.dto");
const passport_1 = require("@nestjs/passport");
let PenaltyChargeController = class PenaltyChargeController {
    penaltyService;
    constructor(penaltyService) {
        this.penaltyService = penaltyService;
    }
    create(dto) {
        return this.penaltyService.create(dto);
    }
    findAll() {
        return this.penaltyService.findAll();
    }
    findOne(id) {
        return this.penaltyService.findOne(+id);
    }
    update(id, dto) {
        return this.penaltyService.update(+id, dto);
    }
    softDelete(id) {
        return this.penaltyService.softDelete(+id);
    }
};
exports.PenaltyChargeController = PenaltyChargeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_penalty_charge_dto_1.CreatePenaltyChargeDto]),
    __metadata("design:returntype", void 0)
], PenaltyChargeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PenaltyChargeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PenaltyChargeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_penalty_charge_dto_1.UpdatePenaltyChargeDto]),
    __metadata("design:returntype", void 0)
], PenaltyChargeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PenaltyChargeController.prototype, "softDelete", null);
exports.PenaltyChargeController = PenaltyChargeController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('penalty-charges'),
    __metadata("design:paramtypes", [penalty_charge_service_1.PenaltyChargeService])
], PenaltyChargeController);
//# sourceMappingURL=penalty-charge.controller.js.map