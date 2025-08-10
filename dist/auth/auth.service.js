"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const supabase_client_1 = require("../supabase/supabase.client");
let AuthService = class AuthService {
    async register(dto) {
        const { data, error } = await supabase_client_1.supabase.auth.admin.createUser({
            email: dto.email,
            password: dto.password,
            email_confirm: true,
        });
        if (error)
            throw new common_1.BadRequestException(error.message);
        const user = data.user;
        if (!user)
            throw new common_1.BadRequestException('Gagal membuat user.');
        const { error: insertError } = await supabase_client_1.supabase.from('Admin').insert({
            ID_Admin: user.id,
            Nama_Depan_Admin: dto.nama_depan,
            Nama_Belakang_Admin: dto.nama_belakang,
            Peran: dto.peran,
        });
        if (insertError) {
            await supabase_client_1.supabase.auth.admin.deleteUser(user.id);
            throw new common_1.BadRequestException('Gagal menyimpan data admin: ' + insertError.message);
        }
        return { message: 'Registrasi berhasil', user_id: user.id };
    }
    async login(dto) {
        const { data, error } = await supabase_client_1.supabase.auth.signInWithPassword({
            email: dto.email,
            password: dto.password,
        });
        if (error || !data.session) {
            throw new common_1.UnauthorizedException('Email atau password salah.');
        }
        return {
            access_token: data.session.access_token,
            refresh_token: data.session.refresh_token,
            user: data.user,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map