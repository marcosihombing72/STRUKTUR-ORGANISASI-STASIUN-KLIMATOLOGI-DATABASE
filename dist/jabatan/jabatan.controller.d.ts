import { CreateJabatanDto } from './dto/create-jabatan.dto';
import { UpdateJabatanDto } from './dto/update-jabatan.dto';
import { JabatanService } from './jabatan.service';
export declare class JabatanController {
    private readonly jabatanService;
    constructor(jabatanService: JabatanService);
    findAll(): Promise<any[]>;
    getCount(): Promise<{
        count: number | null;
    }>;
    findOne(id: string): Promise<any>;
    create(dto: CreateJabatanDto, user_id: string): Promise<{
        message: string;
        data: any;
    }>;
    update(id: string, dto: UpdateJabatanDto, user_id: string): Promise<{
        message: string;
        data: any;
    }>;
    remove(id: string, user_id: string): Promise<{
        message: string;
    }>;
}
