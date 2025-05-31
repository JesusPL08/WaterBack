"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTicketSaleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ticket_sale_dto_1 = require("./create-ticket-sale.dto");
class UpdateTicketSaleDto extends (0, mapped_types_1.PartialType)(create_ticket_sale_dto_1.CreateTicketSaleDto) {
}
exports.UpdateTicketSaleDto = UpdateTicketSaleDto;
//# sourceMappingURL=update-ticket-sale.dto.js.map