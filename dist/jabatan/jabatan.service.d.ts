import { CreateJabatanDto } from './dto/create-jabatan.dto';
import { UpdateJabatanDto } from './dto/update-jabatan.dto';
export declare class JabatanService {
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(dto: CreateJabatanDto, user_id: string): Promise<{
        message: string;
        data: any;
    }>;
    update(id: string, dto: UpdateJabatanDto, user_id: string): Promise<{
        message: string;
        data: any;
    }>;
    delete(id: string, user_id: string): Promise<{
        message: string;
    }>;
}
