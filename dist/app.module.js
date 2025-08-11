"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const aktivitas_controller_1 = require("./aktivitas/aktivitas.controller");
const aktivitas_module_1 = require("./aktivitas/aktivitas.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const jabatan_controller_1 = require("./jabatan/jabatan.controller");
const jabatan_module_1 = require("./jabatan/jabatan.module");
const jabatan_service_1 = require("./jabatan/jabatan.service");
const petugas_module_1 = require("./petugas/petugas.module");
const petugas_service_1 = require("./petugas/petugas.service");
const struktur_module_1 = require("./struktur/struktur.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            auth_module_1.AuthModule,
            jabatan_module_1.JabatanModule,
            petugas_module_1.PetugasModule,
            struktur_module_1.StrukturModule,
            aktivitas_module_1.AktivitasModule,
        ],
        controllers: [app_controller_1.AppController, jabatan_controller_1.JabatanController, aktivitas_controller_1.AktivitasController],
        providers: [app_service_1.AppService, jabatan_service_1.JabatanService, petugas_service_1.PetugasService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map