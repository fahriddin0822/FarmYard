import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IllnessTypeService } from './illness_type.service';
import { CreateIllnessTypeDto } from './dto/create-illness_type.dto';
import { UpdateIllnessTypeDto } from './dto/update-illness_type.dto';

@Controller('illness-type')
export class IllnessTypeController {
  constructor(private readonly illnessTypeService: IllnessTypeService) {}

  @Post()
  create(@Body() createIllnessTypeDto: CreateIllnessTypeDto) {
    return this.illnessTypeService.create(createIllnessTypeDto);
  }

  @Get()
  findAll() {
    return this.illnessTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.illnessTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIllnessTypeDto: UpdateIllnessTypeDto) {
    return this.illnessTypeService.update(+id, updateIllnessTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.illnessTypeService.remove(+id);
  }
}
