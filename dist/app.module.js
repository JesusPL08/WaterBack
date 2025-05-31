"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const task_module_1 = require("./tasks/task.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const profile_module_1 = require("./profile/profile.module");
const salary_module_1 = require("./salary/salary.module");
const client_module_1 = require("./client/client.module");
const branch_module_1 = require("./branch/branch.module");
const sale_module_1 = require("./sale/sale.module");
const commission_module_1 = require("./commission/commission.module");
const bonus_module_1 = require("./bonus/bonus.module");
const penalty_charge_module_1 = require("./penalty-charge/penalty-charge.module");
const attendance_type_module_1 = require("./attendance-type/attendance-type.module");
const attendance_module_1 = require("./attendance/attendance.module");
const supplier_module_1 = require("./supplier/supplier.module");
const cost_module_1 = require("./cost/cost.module");
const product_module_1 = require("./product/product.module");
const expense_type_module_1 = require("./expense-type/expense-type.module");
const expense_module_1 = require("./expense/expense.module");
const reports_module_1 = require("./reports/reports.module");
const ticket_module_1 = require("./ticket/ticket.module");
const ticket_sale_module_1 = require("./ticket-sale/ticket-sale.module");
const product_sale_module_1 = require("./product-sale/product-sale.module");
const price_module_1 = require("./price/price.module");
const delivery_branch_module_1 = require("./delivery-branch/delivery-branch.module");
const routes_day_module_1 = require("./routes-day/routes-day.module");
const routes_delivery_module_1 = require("./routes-delivery/routes-delivery.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [task_module_1.TaskModule, auth_module_1.AuthModule, users_module_1.UsersModule, profile_module_1.ProfileModule, salary_module_1.SalaryModule, client_module_1.ClientModule, branch_module_1.BranchModule, sale_module_1.SaleModule, commission_module_1.CommissionModule, bonus_module_1.BonusModule, penalty_charge_module_1.PenaltyChargeModule, attendance_type_module_1.AttendanceTypeModule, attendance_module_1.AttendanceModule, supplier_module_1.SupplierModule, cost_module_1.CostModule, product_module_1.ProductModule, expense_type_module_1.ExpenseTypeModule, expense_module_1.ExpenseModule, reports_module_1.ReportsModule, ticket_module_1.TicketModule, ticket_sale_module_1.TicketSaleModule, product_sale_module_1.ProductSaleModule, price_module_1.PriceModule, delivery_branch_module_1.DeliveryBranchModule, routes_day_module_1.RoutesDayModule, routes_delivery_module_1.RoutesDeliveryModule],
        controllers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map