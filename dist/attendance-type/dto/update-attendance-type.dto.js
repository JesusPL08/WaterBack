"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAttendanceTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_attendance_type_dto_1 = require("./create-attendance-type.dto");
class UpdateAttendanceTypeDto extends (0, mapped_types_1.PartialType)(create_attendance_type_dto_1.CreateAttendanceTypeDto) {
}
exports.UpdateAttendanceTypeDto = UpdateAttendanceTypeDto;
//# sourceMappingURL=update-attendance-type.dto.js.map