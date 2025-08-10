import { Module } from '@nestjs/common';
import { PetugasController } from './petugas.controller';
import { PetugasService } from './petugas.service';

@Module({ 
  controllers: [PetugasController],
  providers: [PetugasService],
})
export class PetugasModule {}
