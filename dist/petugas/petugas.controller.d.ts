import { PetugasService } from './petugas.service';
import { CreatePetugasDto } from './dto/create-petugas.dto';
import { UpdatePetugasDto } from './dto/update-petugas.dto';
export declare class PetugasController {
    private readonly petugasService;
    constructor(petugasService: PetugasService);
    create(dto: CreatePetugasDto): Promise<{
        message: string;
        data: any;
    }>;
    findAll(): Promise<any[]>;
    getCount(): Promise<{
        count: number;
    }>;
    findOne(nip: string): Promise<any>;
    update(nip: string, dto: UpdatePetugasDto): Promise<{
        message: string;
        data: any;
    }>;
    remove(nip: string): Promise<{
        message: string;
    }>;
}
