"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
const dotenv = require("dotenv");
const supabase_js_1 = require("@supabase/supabase-js");
dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY wajib diatur di file .env');
}
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseServiceKey);
//# sourceMappingURL=supabase.client.js.map