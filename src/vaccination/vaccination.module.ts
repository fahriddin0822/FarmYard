import { Module } from '@nestjs/common';
import { VaccinationService } from './vaccination.service';
import { VaccinationController } from './vaccination.controller';

@Module({
  controllers: [VaccinationController],
  providers: [VaccinationService],
})
export class VaccinationModule {}
