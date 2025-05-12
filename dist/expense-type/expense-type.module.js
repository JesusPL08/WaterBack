"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseTypeModule = void 0;
const common_1 = require("@nestjs/common");
const expense_type_service_1 = require("./expense-type.service");
const expense_type_controller_1 = require("./expense-type.controller");
let ExpenseTypeModule = class ExpenseTypeModule {
};
exports.ExpenseTypeModule = ExpenseTypeModule;
exports.ExpenseTypeModule = ExpenseTypeModule = __decorate([
    (0, common_1.Module)({
        providers: [expense_type_service_1.ExpenseTypeService],
        controllers: [expense_type_controller_1.ExpenseTypeController]
    })
], ExpenseTypeModule);
//# sourceMappingURL=expense-type.module.js.map