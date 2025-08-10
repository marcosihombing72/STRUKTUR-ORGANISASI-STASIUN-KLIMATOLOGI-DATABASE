"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetugasService = void 0;
const common_1 = require("@nestjs/common");
const supabase_client_1 = require("../supabase/supabase.client");
const logAktivitas_1 = require("../utils/logAktivitas");
let PetugasService = class PetugasService {
    async create(createPetugasDto) {
        const { data, error } = await supabase_client_1.supabase
            .from('Petugas')
            .insert([createPetugasDto])
            .select()
            .maybeSingle();
        if (error) {
            if (error.code === '23505') {
                throw new common_1.BadRequestException('NIP sudah terdaftar');
            }
            throw new common_1.BadRequestException('Gagal menambahkan petugas');
        }
        if (!data) {
            throw new common_1.BadRequestException('Petugas gagal ditambahkan');
        }
        await (0, logAktivitas_1.logAktivitas)('Petugas', 'Menambahkan pegawai', `Menambahkan pegawai ${createPetugasDto.nama_lengkap}`);
        return {
            message: 'Pegawai berhasil ditambahkan',
            data,
        };
    }
    async update(nip, updateDto) {
        const { data, error } = await supabase_client_1.supabase
            .from('Petugas')
            .update(updateDto)
            .eq('nip', nip)
            .select()
            .maybeSingle();
        if (error) {
            if (error.code === '23505') {
                throw new common_1.BadRequestException('NIP sudah terdaftar');
            }
            throw new common_1.BadRequestException('Gagal memperbarui petugas');
        }
        if (!data) {
            throw new common_1.BadRequestException('Petugas tidak ditemukan');
        }
        await (0, logAktivitas_1.logAktivitas)('Petugas', 'Memperbarui pegawai', `Memperbarui pegawai ${data.nama_lengkap}`);
        return {
            message: 'Pegawai berhasil diperbarui',
            data,
        };
    }
    async findAll() {
        const { data, error } = await supabase_client_1.supabase.from('Petugas').select('*');
        if (error)
            throw new common_1.BadRequestException('Gagal mengambil data petugas');
        return data;
    }
    async findOne(nip) {
        const { data, error } = await supabase_client_1.supabase
            .from('Petugas')
            .select('*')
            .eq('nip', nip)
            .maybeSingle();
        if (error)
            throw new common_1.BadRequestException('Gagal mengambil data pegawai');
        if (!data)
            throw new common_1.BadRequestException('Pegawai tidak ditemukan');
        return data;
    }
    async getCount() {
        const { count, error } = await supabase_client_1.supabase
            .from('Petugas')
            .select('*', { count: 'exact', head: true });
        if (error) {
            throw new common_1.BadRequestException('Gagal mengambil total pegawai');
        }
        return { count: count ?? 0 };
    }
    async remove(nip) {
        const { error } = await supabase_client_1.supabase.from('Petugas').delete().eq('nip', nip);
        if (error)
            throw new common_1.BadRequestException('Gagal menghapus petugas');
        await (0, logAktivitas_1.logAktivitas)('Pegawai', 'Menghapus pegawai', `Menghapus pegawai dengan NIP ${nip}`);
        return { message: 'Pegawai berhasil dihapus' };
    }
};
exports.PetugasService = PetugasService;
exports.PetugasService = PetugasService = __decorate([
    (0, common_1.Injectable)()
], PetugasService);
//# sourceMappingURL=petugas.service.js.map