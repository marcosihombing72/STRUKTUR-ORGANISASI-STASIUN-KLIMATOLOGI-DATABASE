import { CreateStrukturDto } from './dto/create-struktur.dto';
import { UpdateStrukturDto } from './dto/update-struktur.dto';
export declare class StrukturService {
    private readonly table;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(dto: CreateStrukturDto, user_id: string): Promise<{
        message: string;
    }>;
    update(id: string, dto: UpdateStrukturDto, user_id: string): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    getCount(): Promise<{
        count: number;
    }>;
}
