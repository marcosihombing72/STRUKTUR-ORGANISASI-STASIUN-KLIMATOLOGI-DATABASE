"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStrukturDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_struktur_dto_1 = require("./create-struktur.dto");
class UpdateStrukturDto extends (0, swagger_1.PartialType)(create_struktur_dto_1.CreateStrukturDto) {
}
exports.UpdateStrukturDto = UpdateStrukturDto;
//# sourceMappingURL=update-struktur.dto.js.map