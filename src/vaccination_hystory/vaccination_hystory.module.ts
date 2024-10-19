import { Module } from '@nestjs/common';
import { VaccinationHystoryService } from './vaccination_hystory.service';
import { VaccinationHystoryController } from './vaccination_hystory.controller';

@Module({
  controllers: [VaccinationHystoryController],
  providers: [VaccinationHystoryService],
})
export class VaccinationHystoryModule {}
