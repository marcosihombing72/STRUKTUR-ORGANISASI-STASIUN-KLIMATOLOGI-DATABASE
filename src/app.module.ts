import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
 
import { AktivitasController } from './aktivitas/aktivitas.controller';
import { AktivitasModule } from './aktivitas/aktivitas.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JabatanController } from './jabatan/jabatan.controller';
import { JabatanModule } from './jabatan/jabatan.module';
import { JabatanService } from './jabatan/jabatan.service';
import { PetugasModule } from './petugas/petugas.module';
import { PetugasService } from './petugas/petugas.service';
import { StrukturModule } from './struktur/struktur.module';

@Module({
  imports: [
    // Load .env file secara global
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Modul-modul lainnya
    AuthModule,

    JabatanModule,

    PetugasModule,

    StrukturModule,

    AktivitasModule,
  ],
  controllers: [AppController, JabatanController, AktivitasController],
  providers: [AppService, JabatanService, PetugasService],
})
export class AppModule {}
