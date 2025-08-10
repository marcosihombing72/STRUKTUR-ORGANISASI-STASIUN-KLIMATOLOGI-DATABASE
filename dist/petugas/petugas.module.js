"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetugasModule = void 0;
const common_1 = require("@nestjs/common");
const petugas_service_1 = require("./petugas.service");
const petugas_controller_1 = require("./petugas.controller");
let PetugasModule = class PetugasModule {
};
exports.PetugasModule = PetugasModule;
exports.PetugasModule = PetugasModule = __decorate([
    (0, common_1.Module)({
        controllers: [petugas_controller_1.PetugasController],
        providers: [petugas_service_1.PetugasService],
    })
], PetugasModule);
//# sourceMappingURL=petugas.module.js.map