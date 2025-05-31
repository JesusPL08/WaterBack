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
exports.TicketSaleController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const ticket_sale_service_1 = require("./ticket-sale.service");
const create_ticket_sale_dto_1 = require("./dto/create-ticket-sale.dto");
const update_ticket_sale_dto_1 = require("./dto/update-ticket-sale.dto");
let TicketSaleController = class TicketSaleController {
    ticketSaleService;
    constructor(ticketSaleService) {
        this.ticketSaleService = ticketSaleService;
    }
    create(createTicketSaleDto) {
        return this.ticketSaleService.create(createTicketSaleDto);
    }
    findAll() {
        return this.ticketSaleService.findAll();
    }
    findOne(id) {
        return this.ticketSaleService.findOne(+id);
    }
    update(id, updateTicketSaleDto) {
        return this.ticketSaleService.update(+id, updateTicketSaleDto);
    }
    softDelete(id) {
        return this.ticketSaleService.softDelete(+id);
    }
};
exports.TicketSaleController = TicketSaleController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ticket_sale_dto_1.CreateTicketSaleDto]),
    __metadata("design:returntype", void 0)
], TicketSaleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TicketSaleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TicketSaleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ticket_sale_dto_1.UpdateTicketSaleDto]),
    __metadata("design:returntype", void 0)
], TicketSaleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TicketSaleController.prototype, "softDelete", null);
exports.TicketSaleController = TicketSaleController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('ticket-sales'),
    __metadata("design:paramtypes", [ticket_sale_service_1.TicketSaleService])
], TicketSaleController);
//# sourceMappingURL=ticket-sale.controller.js.map