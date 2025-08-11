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
exports.StrukturController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_struktur_dto_1 = require("./dto/create-struktur.dto");
const update_struktur_dto_1 = require("./dto/update-struktur.dto");
const struktur_service_1 = require("./struktur.service");
let StrukturController = class StrukturController {
    strukturService;
    constructor(strukturService) {
        this.strukturService = strukturService;
    }
    findAll() {
        return this.strukturService.findAll();
    }
    getCount() {
        return this.strukturService.getCount();
    }
    findOne(ID_Struktur) {
        return this.strukturService.findOne(ID_Struktur);
    }
    create(dto, user_id) {
        return this.strukturService.create(dto, user_id);
    }
    update(ID_Struktur, dto, user_id) {
        return this.strukturService.update(ID_Struktur, dto, user_id);
    }
    remove(ID_Struktur) {
        return this.strukturService.remove(ID_Struktur);
    }
};
exports.StrukturController = StrukturController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil semua data struktur organisasi' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StrukturController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('count'),
    (0, swagger_1.ApiOperation)({ summary: 'Hitung total data struktur organisasi' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StrukturController.prototype, "getCount", null);
__decorate([
    (0, common_1.Get)(':ID_Struktur'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil satu data struktur organisasi berdasarkan ID' }),
    (0, swagger_1.ApiParam)({ name: 'ID_Struktur', description: 'ID Struktur Organisasi' }),
    __param(0, (0, common_1.Param)('ID_Struktur')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StrukturController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Tambah data struktur organisasi' }),
    (0, swagger_1.ApiHeader)({ name: 'user_id', description: 'ID pengguna yang melakukan aksi' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_struktur_dto_1.CreateStrukturDto, String]),
    __metadata("design:returntype", void 0)
], StrukturController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':ID_Struktur'),
    (0, swagger_1.ApiOperation)({ summary: 'Update data struktur organisasi berdasarkan ID' }),
    (0, swagger_1.ApiParam)({ name: 'ID_Struktur', description: 'ID Struktur Organisasi' }),
    (0, swagger_1.ApiHeader)({ name: 'user_id', description: 'ID pengguna yang melakukan aksi' }),
    __param(0, (0, common_1.Param)('ID_Struktur')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_struktur_dto_1.UpdateStrukturDto, String]),
    __metadata("design:returntype", void 0)
], StrukturController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':ID_Struktur'),
    (0, swagger_1.ApiOperation)({ summary: 'Hapus data struktur organisasi berdasarkan ID' }),
    (0, swagger_1.ApiParam)({ name: 'ID_Struktur', description: 'ID Struktur Organisasi' }),
    __param(0, (0, common_1.Param)('ID_Struktur')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StrukturController.prototype, "remove", null);
exports.StrukturController = StrukturController = __decorate([
    (0, swagger_1.ApiTags)('struktur-organisasi'),
    (0, common_1.Controller)('struktur-organisasi'),
    __metadata("design:paramtypes", [struktur_service_1.StrukturService])
], StrukturController);
//# sourceMappingURL=struktur.controller.js.map