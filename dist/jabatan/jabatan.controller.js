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
exports.JabatanController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const supabase_client_1 = require("../supabase/supabase.client");
const create_jabatan_dto_1 = require("./dto/create-jabatan.dto");
const update_jabatan_dto_1 = require("./dto/update-jabatan.dto");
const jabatan_service_1 = require("./jabatan.service");
let JabatanController = class JabatanController {
    jabatanService;
    constructor(jabatanService) {
        this.jabatanService = jabatanService;
    }
    findAll() {
        return this.jabatanService.findAll();
    }
    async getCount() {
        const { count, error } = await supabase_client_1.supabase
            .from('Jabatan')
            .select('*', { count: 'exact', head: true });
        if (error)
            throw new common_1.BadRequestException(error.message);
        return { count };
    }
    findOne(id) {
        return this.jabatanService.findOne(id);
    }
    create(dto, user_id) {
        return this.jabatanService.create(dto, user_id);
    }
    update(id, dto, user_id) {
        return this.jabatanService.update(id, dto, user_id);
    }
    remove(id, user_id) {
        return this.jabatanService.delete(id, user_id);
    }
};
exports.JabatanController = JabatanController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JabatanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JabatanController.prototype, "getCount", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JabatanController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_jabatan_dto_1.CreateJabatanDto, String]),
    __metadata("design:returntype", void 0)
], JabatanController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_jabatan_dto_1.UpdateJabatanDto, String]),
    __metadata("design:returntype", void 0)
], JabatanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], JabatanController.prototype, "remove", null);
exports.JabatanController = JabatanController = __decorate([
    (0, swagger_1.ApiTags)('jabatan'),
    (0, common_1.Controller)('jabatan'),
    __metadata("design:paramtypes", [jabatan_service_1.JabatanService])
], JabatanController);
//# sourceMappingURL=jabatan.controller.js.map