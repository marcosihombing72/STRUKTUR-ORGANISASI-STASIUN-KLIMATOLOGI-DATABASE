"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePetugasDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_petugas_dto_1 = require("./create-petugas.dto");
class UpdatePetugasDto extends (0, swagger_1.PartialType)(create_petugas_dto_1.CreatePetugasDto) {
}
exports.UpdatePetugasDto = UpdatePetugasDto;
//# sourceMappingURL=update-petugas.dto.js.map