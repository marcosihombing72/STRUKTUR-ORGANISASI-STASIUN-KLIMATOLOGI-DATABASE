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
exports.AktivitasController = void 0;
const common_1 = require("@nestjs/common");
const supabase_client_1 = require("../supabase/supabase.client");
let AktivitasController = class AktivitasController {
    async getRecent() {
        const { data: allData, error } = await supabase_client_1.supabase
            .from('Aktivitas')
            .select('id, tipe, waktu, deskripsi')
            .order('waktu', { ascending: false });
        if (error)
            throw new common_1.BadRequestException(error.message);
        const terbaru = allData.slice(0, 3);
        const sisanya = allData.slice(3);
        if (sisanya.length > 0) {
            const idsToDelete = sisanya.map((item) => item.id);
            await supabase_client_1.supabase.from('Aktivitas').delete().in('id', idsToDelete);
        }
        const formatted = terbaru.map((item) => ({
            jenis: item.tipe,
            waktu: item.waktu,
            keterangan: item.deskripsi,
        }));
        return formatted;
    }
};
exports.AktivitasController = AktivitasController;
__decorate([
    (0, common_1.Get)('terbaru'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AktivitasController.prototype, "getRecent", null);
exports.AktivitasController = AktivitasController = __decorate([
    (0, common_1.Controller)('aktivitas')
], AktivitasController);
//# sourceMappingURL=aktivitas.controller.js.map