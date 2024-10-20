import { Module } from '@nestjs/common';
import { AnimalConditionService } from './animal_condition.service';
import { AnimalConditionController } from './animal_condition.controller';

@Module({
  controllers: [AnimalConditionController],
  providers: [AnimalConditionService],
})
export class AnimalConditionModule {}
