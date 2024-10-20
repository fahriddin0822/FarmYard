import { PartialType } from '@nestjs/swagger';
import { CreateAnimalConditionDto } from './create-animal_condition.dto';

export class UpdateAnimalConditionDto extends PartialType(CreateAnimalConditionDto) {}
