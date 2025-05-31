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
exports.RoutesDayController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const routes_day_service_1 = require("./routes-day.service");
const create_routes_day_dto_1 = require("./dto/create-routes-day.dto");
const update_routes_day_dto_1 = require("./dto/update-routes-day.dto");
let RoutesDayController = class RoutesDayController {
    routesDayService;
    constructor(routesDayService) {
        this.routesDayService = routesDayService;
    }
    create(createDto) {
        return this.routesDayService.create(createDto);
    }
    findAll() {
        return this.routesDayService.findAll();
    }
    findOne(id) {
        return this.routesDayService.findOne(+id);
    }
    update(id, updateDto) {
        return this.routesDayService.update(+id, updateDto);
    }
    softDelete(id) {
        return this.routesDayService.softDelete(+id);
    }
};
exports.RoutesDayController = RoutesDayController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_routes_day_dto_1.CreateRoutesDayDto]),
    __metadata("design:returntype", void 0)
], RoutesDayController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoutesDayController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoutesDayController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_routes_day_dto_1.UpdateRoutesDayDto]),
    __metadata("design:returntype", void 0)
], RoutesDayController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoutesDayController.prototype, "softDelete", null);
exports.RoutesDayController = RoutesDayController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('routes-days'),
    __metadata("design:paramtypes", [routes_day_service_1.RoutesDayService])
], RoutesDayController);
//# sourceMappingURL=routes-day.controller.js.map