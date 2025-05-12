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
exports.AttendanceTypeController = void 0;
const common_1 = require("@nestjs/common");
const attendance_type_service_1 = require("./attendance-type.service");
const create_attendance_type_dto_1 = require("./dto/create-attendance-type.dto");
const update_attendance_type_dto_1 = require("./dto/update-attendance-type.dto");
const passport_1 = require("@nestjs/passport");
let AttendanceTypeController = class AttendanceTypeController {
    attendanceTypeService;
    constructor(attendanceTypeService) {
        this.attendanceTypeService = attendanceTypeService;
    }
    create(dto) {
        return this.attendanceTypeService.create(dto);
    }
    findAll() {
        return this.attendanceTypeService.findAll();
    }
    findOne(id) {
        return this.attendanceTypeService.findOne(+id);
    }
    update(id, dto) {
        return this.attendanceTypeService.update(+id, dto);
    }
    softDelete(id) {
        return this.attendanceTypeService.softDelete(+id);
    }
};
exports.AttendanceTypeController = AttendanceTypeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_attendance_type_dto_1.CreateAttendanceTypeDto]),
    __metadata("design:returntype", void 0)
], AttendanceTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttendanceTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttendanceTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_attendance_type_dto_1.UpdateAttendanceTypeDto]),
    __metadata("design:returntype", void 0)
], AttendanceTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttendanceTypeController.prototype, "softDelete", null);
exports.AttendanceTypeController = AttendanceTypeController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('attendance-types'),
    __metadata("design:paramtypes", [attendance_type_service_1.AttendanceTypeService])
], AttendanceTypeController);
//# sourceMappingURL=attendance-type.controller.js.map