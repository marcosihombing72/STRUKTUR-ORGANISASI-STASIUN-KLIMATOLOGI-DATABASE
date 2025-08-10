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
exports.CreatePetugasDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePetugasDto {
    nip;
    nama_lengkap;
    pendidikan_terakhir;
    pangkat_golongan;
    kgb_terakhir;
    kgb_berikutnya;
    no_telepon;
    foto_pegawai;
    tempat_tanggal_lahir;
    tmt;
}
exports.CreatePetugasDto = CreatePetugasDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1987654321' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePetugasDto.prototype, "nip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Siti Aminah' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePetugasDto.prototype, "nama_lengkap", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'S1 Geofisika' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePetugasDto.prototype, "pendidikan_terakhir", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'III/a' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePetugasDto.prototype, "pangkat_golongan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-05-10' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePetugasDto.prototype, "kgb_terakhir", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-05-10' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePetugasDto.prototype, "kgb_berikutnya", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '081234567890' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePetugasDto.prototype, "no_telepon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'base64string.jpg' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePetugasDto.prototype, "foto_pegawai", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Jakarta, 12 Januari 1985' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePetugasDto.prototype, "tempat_tanggal_lahir", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2022-01-01', description: 'Tanggal mulai menjabat dalam struktur organisasi' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePetugasDto.prototype, "tmt", void 0);
//# sourceMappingURL=create-petugas.dto.js.map