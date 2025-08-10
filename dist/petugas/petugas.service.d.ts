import { CreatePetugasDto } from './dto/create-petugas.dto';
import { UpdatePetugasDto } from './dto/update-petugas.dto';
export declare class PetugasService {
    create(createPetugasDto: CreatePetugasDto): Promise<{
        message: string;
        data: any;
    }>;
    update(nip: string, updateDto: UpdatePetugasDto): Promise<{
        message: string;
        data: any;
    }>;
    findAll(): Promise<any[]>;
    findOne(nip: string): Promise<any>;
    getCount(): Promise<{
        count: number;
    }>;
    remove(nip: string): Promise<{
        message: string;
    }>;
}
