import { Injectable } from '@nestjs/common';
import { CreateAnimalConditionDto } from './dto/create-animal_condition.dto';
import { UpdateAnimalConditionDto } from './dto/update-animal_condition.dto';

@Injectable()
export class AnimalConditionService {
  create(createAnimalConditionDto: CreateAnimalConditionDto) {
    return 'This action adds a new animalCondition';
  }

  findAll() {
    return `This action returns all animalCondition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animalCondition`;
  }

  update(id: number, updateAnimalConditionDto: UpdateAnimalConditionDto) {
    return `This action updates a #${id} animalCondition`;
  }

  remove(id: number) {
    return `This action removes a #${id} animalCondition`;
  }
}
