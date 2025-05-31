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
exports.DeliveryBranchController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const delivery_branch_service_1 = require("./delivery-branch.service");
const create_delivery_branch_dto_1 = require("./dto/create-delivery-branch.dto");
const update_delivery_branch_dto_1 = require("./dto/update-delivery-branch.dto");
let DeliveryBranchController = class DeliveryBranchController {
    deliveryBranchService;
    constructor(deliveryBranchService) {
        this.deliveryBranchService = deliveryBranchService;
    }
    create(createDto) {
        return this.deliveryBranchService.create(createDto);
    }
    findAll() {
        return this.deliveryBranchService.findAll();
    }
    findOne(id) {
        return this.deliveryBranchService.findOne(+id);
    }
    update(id, updateDto) {
        return this.deliveryBranchService.update(+id, updateDto);
    }
    softDelete(id) {
        return this.deliveryBranchService.softDelete(+id);
    }
};
exports.DeliveryBranchController = DeliveryBranchController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_delivery_branch_dto_1.CreateDeliveryBranchDto]),
    __metadata("design:returntype", void 0)
], DeliveryBranchController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeliveryBranchController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeliveryBranchController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_delivery_branch_dto_1.UpdateDeliveryBranchDto]),
    __metadata("design:returntype", void 0)
], DeliveryBranchController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeliveryBranchController.prototype, "softDelete", null);
exports.DeliveryBranchController = DeliveryBranchController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('delivery-branches'),
    __metadata("design:paramtypes", [delivery_branch_service_1.DeliveryBranchService])
], DeliveryBranchController);
//# sourceMappingURL=delivery-branch.controller.js.map