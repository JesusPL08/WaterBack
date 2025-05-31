"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeliveryBranchDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_delivery_branch_dto_1 = require("./create-delivery-branch.dto");
class UpdateDeliveryBranchDto extends (0, mapped_types_1.PartialType)(create_delivery_branch_dto_1.CreateDeliveryBranchDto) {
}
exports.UpdateDeliveryBranchDto = UpdateDeliveryBranchDto;
//# sourceMappingURL=update-delivery-branch.dto.js.map