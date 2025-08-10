import { Module } from '@nestjs/common';
import { StrukturController } from './struktur.controller';
import { StrukturService } from './struktur.service';
 
@Module({
  controllers: [StrukturController],
  providers: [StrukturService],
})
export class StrukturModule {}
