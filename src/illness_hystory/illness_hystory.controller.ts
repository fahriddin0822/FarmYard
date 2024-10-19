import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IllnessHystoryService } from './illness_hystory.service';
import { CreateIllnessHystoryDto } from './dto/create-illness_hystory.dto';
import { UpdateIllnessHystoryDto } from './dto/update-illness_hystory.dto';

@Controller('illness-hystory')
export class IllnessHystoryController {
  constructor(private readonly illnessHystoryService: IllnessHystoryService) {}

  @Post()
  create(@Body() createIllnessHystoryDto: CreateIllnessHystoryDto) {
    return this.illnessHystoryService.create(createIllnessHystoryDto);
  }

  @Get()
  findAll() {
    return this.illnessHystoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.illnessHystoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIllnessHystoryDto: UpdateIllnessHystoryDto) {
    return this.illnessHystoryService.update(+id, updateIllnessHystoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.illnessHystoryService.remove(+id);
  }
}
