"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrukturService = void 0;
const common_1 = require("@nestjs/common");
const supabase_client_1 = require("../supabase/supabase.client");
const logAktivitas_1 = require("../utils/logAktivitas");
let StrukturService = class StrukturService {
    table = 'Struktur_Organisasi';
    async findAll() {
        try {
            const { data: strukturData, error } = await supabase_client_1.supabase
                .from(this.table)
                .select('*')
                .order('tmt', { ascending: false });
            if (error)
                throw error;
            const nip = strukturData.map((s) => s.Petugas).filter(Boolean);
            if (nip.length === 0) {
                return strukturData.map((s) => ({
                    ...s,
                    petugas: null,
                }));
            }
            const { data: petugasData, error: petugasError } = await supabase_client_1.supabase
                .from('Petugas')
                .select('nip, nama_lengkap, no_telepon, foto_pegawai')
                .in('nip', nip);
            if (petugasError)
                throw petugasError;
            return strukturData.map((s) => {
                const petugas = petugasData.find((p) => p.nip === s.Petugas);
                return {
                    ...s,
                    petugas,
                };
            });
        }
        catch (err) {
            console.error('findAll Struktur Error:', err);
            throw new common_1.InternalServerErrorException('Gagal mengambil data struktur organisasi');
        }
    }
    async findOne(id) {
        const { data, error } = await supabase_client_1.supabase
            .from(this.table)
            .select('*')
            .eq('ID_Struktur', id)
            .single();
        if (error || !data)
            throw new common_1.NotFoundException('Struktur tidak ditemukan');
        return data;
    }
    async create(dto, user_id) {
        const { error } = await supabase_client_1.supabase.from(this.table).insert(dto);
        if (error)
            throw error;
        await (0, logAktivitas_1.logAktivitas)('Struktur-Organisasi', 'Menambahkan struktur', `Menambahkan struktur ${dto.jabatan}`);
        return { message: 'Struktur organisasi berhasil ditambahkan' };
    }
    async update(id, dto, user_id) {
        const { error } = await supabase_client_1.supabase
            .from(this.table)
            .update(dto)
            .eq('ID_Struktur', id);
        if (error)
            throw error;
        await (0, logAktivitas_1.logAktivitas)('Struktur-Organisasi', 'Memperbarui struktur', `Memperbarui struktur ${dto.jabatan}`);
        return { message: 'Struktur organisasi berhasil diperbarui' };
    }
    async remove(id) {
        const { error } = await supabase_client_1.supabase
            .from(this.table)
            .delete()
            .eq('ID_Struktur', id);
        if (error)
            throw error;
        await (0, logAktivitas_1.logAktivitas)('Struktur-Organisasi', 'Menghapus struktur', 'Menghapus entri struktur organisasi');
        return { message: 'Struktur organisasi berhasil dihapus' };
    }
    async getCount() {
        try {
            const { count, error } = await supabase_client_1.supabase
                .from(this.table)
                .select('*', { count: 'exact', head: true });
            if (error)
                throw error;
            return { count: count ?? 0 };
        }
        catch (err) {
            console.error('getCount Struktur Error:', err);
            throw new common_1.InternalServerErrorException('Gagal mengambil total struktur organisasi');
        }
    }
};
exports.StrukturService = StrukturService;
exports.StrukturService = StrukturService = __decorate([
    (0, common_1.Injectable)()
], StrukturService);
//# sourceMappingURL=struktur.service.js.map