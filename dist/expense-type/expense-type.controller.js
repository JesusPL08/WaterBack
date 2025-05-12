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
exports.ExpenseTypeController = void 0;
const common_1 = require("@nestjs/common");
const expense_type_service_1 = require("./expense-type.service");
const create_expense_type_dto_1 = require("./dto/create-expense-type.dto");
const update_expense_type_dto_1 = require("./dto/update-expense-type.dto");
const passport_1 = require("@nestjs/passport");
let ExpenseTypeController = class ExpenseTypeController {
    expenseTypeService;
    constructor(expenseTypeService) {
        this.expenseTypeService = expenseTypeService;
    }
    create(dto) {
        return this.expenseTypeService.create(dto);
    }
    findAll() {
        return this.expenseTypeService.findAll();
    }
    findOne(id) {
        return this.expenseTypeService.findOne(+id);
    }
    update(id, dto) {
        return this.expenseTypeService.update(+id, dto);
    }
    softDelete(id) {
        return this.expenseTypeService.softDelete(+id);
    }
};
exports.ExpenseTypeController = ExpenseTypeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_expense_type_dto_1.CreateExpenseTypeDto]),
    __metadata("design:returntype", void 0)
], ExpenseTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExpenseTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExpenseTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_expense_type_dto_1.UpdateExpenseTypeDto]),
    __metadata("design:returntype", void 0)
], ExpenseTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExpenseTypeController.prototype, "softDelete", null);
exports.ExpenseTypeController = ExpenseTypeController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('expense-types'),
    __metadata("design:paramtypes", [expense_type_service_1.ExpenseTypeService])
], ExpenseTypeController);
//# sourceMappingURL=expense-type.controller.js.map