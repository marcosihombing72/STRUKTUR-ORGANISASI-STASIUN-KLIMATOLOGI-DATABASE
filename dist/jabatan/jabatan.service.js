"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JabatanService = void 0;
const common_1 = require("@nestjs/common");
const supabase_client_1 = require("../supabase/supabase.client");
const logAktivitas_1 = require("../utils/logAktivitas");
let JabatanService = class JabatanService {
    async findAll() {
        const { data, error } = await supabase_client_1.supabase.from('Jabatan').select('*');
        if (error)
            throw new common_1.BadRequestException(error.message);
        return data;
    }
    async findOne(id) {
        const { data, error } = await supabase_client_1.supabase
            .from('Jabatan')
            .select('*')
            .eq('ID_Jabatan', id)
            .single();
        if (error || !data) {
            throw new common_1.NotFoundException('Jabatan tidak ditemukan');
        }
        return data;
    }
    async create(dto, user_id) {
        const { data, error } = await supabase_client_1.supabase
            .from('Jabatan')
            .insert({ Nama_Jabatan: dto.Nama_Jabatan })
            .select()
            .single();
        if (error)
            throw new common_1.BadRequestException('Gagal membuat jabatan: ' + error.message);
        await (0, logAktivitas_1.logAktivitas)('Jabatan', 'Tambah', `Menambahkan jabatan ${dto.Nama_Jabatan}`);
        return { message: 'Jabatan berhasil ditambahkan', data };
    }
    async update(id, dto, user_id) {
        const { data, error } = await supabase_client_1.supabase
            .from('Jabatan')
            .update({ Nama_Jabatan: dto.Nama_Jabatan })
            .eq('ID_Jabatan', id)
            .select()
            .single();
        if (error || !data)
            throw new common_1.NotFoundException('Gagal memperbarui jabatan');
        await (0, logAktivitas_1.logAktivitas)('Jabatan', 'Edit', `Mengubah jabatan menjadi ${dto.Nama_Jabatan}`);
        return { message: 'Jabatan berhasil diperbarui', data };
    }
    async delete(id, user_id) {
        const { data: jabatan, error: findError } = await supabase_client_1.supabase
            .from('Jabatan')
            .select('Nama_Jabatan')
            .eq('ID_Jabatan', id)
            .single();
        if (findError || !jabatan) {
            throw new common_1.NotFoundException('Jabatan tidak ditemukan');
        }
        const { error } = await supabase_client_1.supabase
            .from('Jabatan')
            .delete()
            .eq('ID_Jabatan', id);
        if (error)
            throw new common_1.BadRequestException('Gagal menghapus jabatan: ' + error.message);
        await (0, logAktivitas_1.logAktivitas)('Jabatan', 'Hapus', `Menghapus jabatan ${jabatan.Nama_Jabatan}`);
        return { message: 'Jabatan berhasil dihapus' };
    }
};
exports.JabatanService = JabatanService;
exports.JabatanService = JabatanService = __decorate([
    (0, common_1.Injectable)()
], JabatanService);
//# sourceMappingURL=jabatan.service.js.map