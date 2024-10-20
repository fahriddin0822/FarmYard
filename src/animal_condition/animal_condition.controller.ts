import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimalConditionService } from './animal_condition.service';
import { CreateAnimalConditionDto } from './dto/create-animal_condition.dto';
import { UpdateAnimalConditionDto } from './dto/update-animal_condition.dto';

@Controller('animal-condition')
export class AnimalConditionController {
  constructor(private readonly animalConditionService: AnimalConditionService) {}

  @Post()
  create(@Body() createAnimalConditionDto: CreateAnimalConditionDto) {
    return this.animalConditionService.create(createAnimalConditionDto);
  }

  @Get()
  findAll() {
    return this.animalConditionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalConditionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimalConditionDto: UpdateAnimalConditionDto) {
    return this.animalConditionService.update(+id, updateAnimalConditionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalConditionService.remove(+id);
  }
}
