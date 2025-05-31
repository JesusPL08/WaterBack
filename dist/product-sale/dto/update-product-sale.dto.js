"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductSaleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_product_sale_dto_1 = require("./create-product-sale.dto");
class UpdateProductSaleDto extends (0, mapped_types_1.PartialType)(create_product_sale_dto_1.CreateProductSaleDto) {
}
exports.UpdateProductSaleDto = UpdateProductSaleDto;
//# sourceMappingURL=update-product-sale.dto.js.map