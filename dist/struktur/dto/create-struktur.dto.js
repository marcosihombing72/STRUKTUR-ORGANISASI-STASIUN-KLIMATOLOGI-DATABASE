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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStrukturDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateStrukturDto {
    ID_Struktur;
    Petugas;
    jabatan;
    tmt;
}
exports.CreateStrukturDto = CreateStrukturDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'STRUK001',
        description: 'ID struktur organisasi (opsional, biasanya auto-generated)',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStrukturDto.prototype, "ID_Struktur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1987654321',
        description: 'NIP petugas yang menjabat',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStrukturDto.prototype, "Petugas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Kepala Seksi Data dan Informasi',
        description: 'Nama jabatan yang diemban petugas',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStrukturDto.prototype, "jabatan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-01',
        description: 'Tanggal mulai tugas (TMT)',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStrukturDto.prototype, "tmt", void 0);
//# sourceMappingURL=create-struktur.dto.js.map