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
exports.RoutesDeliveryController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const routes_delivery_service_1 = require("./routes-delivery.service");
const create_routes_delivery_dto_1 = require("./dto/create-routes-delivery.dto");
const update_routes_delivery_dto_1 = require("./dto/update-routes-delivery.dto");
let RoutesDeliveryController = class RoutesDeliveryController {
    routesDeliveryService;
    constructor(routesDeliveryService) {
        this.routesDeliveryService = routesDeliveryService;
    }
    create(createDto) {
        return this.routesDeliveryService.create(createDto);
    }
    findAll() {
        return this.routesDeliveryService.findAll();
    }
    findOne(id) {
        return this.routesDeliveryService.findOne(+id);
    }
    update(id, updateDto) {
        return this.routesDeliveryService.update(+id, updateDto);
    }
    softDelete(id) {
        return this.routesDeliveryService.softDelete(+id);
    }
};
exports.RoutesDeliveryController = RoutesDeliveryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_routes_delivery_dto_1.CreateRoutesDeliveryDto]),
    __metadata("design:returntype", void 0)
], RoutesDeliveryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoutesDeliveryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoutesDeliveryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_routes_delivery_dto_1.UpdateRoutesDeliveryDto]),
    __metadata("design:returntype", void 0)
], RoutesDeliveryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoutesDeliveryController.prototype, "softDelete", null);
exports.RoutesDeliveryController = RoutesDeliveryController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('routes-deliveries'),
    __metadata("design:paramtypes", [routes_delivery_service_1.RoutesDeliveryService])
], RoutesDeliveryController);
//# sourceMappingURL=routes-delivery.controller.js.map