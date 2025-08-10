"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logAktivitas = logAktivitas;
const supabase_client_1 = require("../supabase/supabase.client");
async function logAktivitas(tipe, aksi, deskripsi) {
    const { error } = await supabase_client_1.supabase.from('Aktivitas').insert([
        {
            tipe,
            aksi,
            deskripsi,
            waktu: new Date().toISOString(),
        },
    ]);
    if (error) {
        console.error('Gagal mencatat aktivitas:', error.message);
    }
}
//# sourceMappingURL=logAktivitas.js.map