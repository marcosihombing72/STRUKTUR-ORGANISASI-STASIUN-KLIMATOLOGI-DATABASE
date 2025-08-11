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
exports.PetugasController = void 0;
const common_1 = require("@nestjs/common");
const create_petugas_dto_1 = require("./dto/create-petugas.dto");
const update_petugas_dto_1 = require("./dto/update-petugas.dto");
const petugas_service_1 = require("./petugas.service");
let PetugasController = class PetugasController {
    petugasService;
    constructor(petugasService) {
        this.petugasService = petugasService;
    }
    create(dto) {
        return this.petugasService.create(dto);
    }
    findAll() {
        return this.petugasService.findAll();
    }
    getCount() {
        return this.petugasService.getCount();
    }
    findOne(nip) {
        return this.petugasService.findOne(nip);
    }
    update(nip, dto) {
        return this.petugasService.update(nip, dto);
    }
    remove(nip) {
        return this.petugasService.remove(nip);
    }
};
exports.PetugasController = PetugasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_petugas_dto_1.CreatePetugasDto]),
    __metadata("design:returntype", void 0)
], PetugasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PetugasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PetugasController.prototype, "getCount", null);
__decorate([
    (0, common_1.Get)(':nip'),
    __param(0, (0, common_1.Param)('nip')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetugasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':nip'),
    __param(0, (0, common_1.Param)('nip')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_petugas_dto_1.UpdatePetugasDto]),
    __metadata("design:returntype", void 0)
], PetugasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':nip'),
    __param(0, (0, common_1.Param)('nip')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetugasController.prototype, "remove", null);
exports.PetugasController = PetugasController = __decorate([
    (0, common_1.Controller)('petugas'),
    __metadata("design:paramtypes", [petugas_service_1.PetugasService])
], PetugasController);
//# sourceMappingURL=petugas.controller.js.map