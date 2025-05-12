"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PenaltyChargeModule = void 0;
const common_1 = require("@nestjs/common");
const penalty_charge_service_1 = require("./penalty-charge.service");
const penalty_charge_controller_1 = require("./penalty-charge.controller");
let PenaltyChargeModule = class PenaltyChargeModule {
};
exports.PenaltyChargeModule = PenaltyChargeModule;
exports.PenaltyChargeModule = PenaltyChargeModule = __decorate([
    (0, common_1.Module)({
        providers: [penalty_charge_service_1.PenaltyChargeService],
        controllers: [penalty_charge_controller_1.PenaltyChargeController]
    })
], PenaltyChargeModule);
//# sourceMappingURL=penalty-charge.module.js.map