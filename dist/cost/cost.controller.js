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
exports.CostController = void 0;
const common_1 = require("@nestjs/common");
const cost_service_1 = require("./cost.service");
const create_cost_dto_1 = require("./dto/create-cost.dto");
const update_cost_dto_1 = require("./dto/update-cost.dto");
const passport_1 = require("@nestjs/passport");
let CostController = class CostController {
    costService;
    constructor(costService) {
        this.costService = costService;
    }
    create(dto) {
        return this.costService.create(dto);
    }
    findAll() {
        return this.costService.findAll();
    }
    findOne(id) {
        return this.costService.findOne(+id);
    }
    update(id, dto) {
        return this.costService.update(+id, dto);
    }
    softDelete(id) {
        return this.costService.softDelete(+id);
    }
};
exports.CostController = CostController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cost_dto_1.CreateCostDto]),
    __metadata("design:returntype", void 0)
], CostController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CostController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CostController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cost_dto_1.UpdateCostDto]),
    __metadata("design:returntype", void 0)
], CostController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CostController.prototype, "softDelete", null);
exports.CostController = CostController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('costs'),
    __metadata("design:paramtypes", [cost_service_1.CostService])
], CostController);
//# sourceMappingURL=cost.controller.js.map