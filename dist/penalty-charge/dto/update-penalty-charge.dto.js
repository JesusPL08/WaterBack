"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePenaltyChargeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_penalty_charge_dto_1 = require("./create-penalty-charge.dto");
class UpdatePenaltyChargeDto extends (0, mapped_types_1.PartialType)(create_penalty_charge_dto_1.CreatePenaltyChargeDto) {
}
exports.UpdatePenaltyChargeDto = UpdatePenaltyChargeDto;
//# sourceMappingURL=update-penalty-charge.dto.js.map