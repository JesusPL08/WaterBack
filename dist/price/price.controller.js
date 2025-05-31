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
exports.PriceController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const price_service_1 = require("./price.service");
const create_price_dto_1 = require("./dto/create-price.dto");
const update_price_dto_1 = require("./dto/update-price.dto");
let PriceController = class PriceController {
    priceService;
    constructor(priceService) {
        this.priceService = priceService;
    }
    create(createPriceDto) {
        return this.priceService.create(createPriceDto);
    }
    findAll() {
        return this.priceService.findAll();
    }
    findOne(id) {
        return this.priceService.findOne(+id);
    }
    update(id, updatePriceDto) {
        return this.priceService.update(+id, updatePriceDto);
    }
    softDelete(id) {
        return this.priceService.softDelete(+id);
    }
};
exports.PriceController = PriceController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_price_dto_1.CreatePriceDto]),
    __metadata("design:returntype", void 0)
], PriceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PriceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PriceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_price_dto_1.UpdatePriceDto]),
    __metadata("design:returntype", void 0)
], PriceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PriceController.prototype, "softDelete", null);
exports.PriceController = PriceController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('prices'),
    __metadata("design:paramtypes", [price_service_1.PriceService])
], PriceController);
//# sourceMappingURL=price.controller.js.map