import { StrukturService } from './struktur.service';
import { CreateStrukturDto } from './dto/create-struktur.dto';
import { UpdateStrukturDto } from './dto/update-struktur.dto';
export declare class StrukturController {
    private readonly strukturService;
    constructor(strukturService: StrukturService);
    findAll(): Promise<any[]>;
    getCount(): Promise<{
        count: number;
    }>;
    findOne(ID_Struktur: string): Promise<any>;
    create(dto: CreateStrukturDto, user_id: string): Promise<{
        message: string;
    }>;
    update(ID_Struktur: string, dto: UpdateStrukturDto, user_id: string): Promise<{
        message: string;
    }>;
    remove(ID_Struktur: string): Promise<{
        message: string;
    }>;
}
