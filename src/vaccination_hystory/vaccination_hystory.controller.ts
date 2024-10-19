import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VaccinationHystoryService } from './vaccination_hystory.service';
import { CreateVaccinationHystoryDto } from './dto/create-vaccination_hystory.dto';
import { UpdateVaccinationHystoryDto } from './dto/update-vaccination_hystory.dto';

@Controller('vaccination-hystory')
export class VaccinationHystoryController {
  constructor(private readonly vaccinationHystoryService: VaccinationHystoryService) {}

  @Post()
  create(@Body() createVaccinationHystoryDto: CreateVaccinationHystoryDto) {
    return this.vaccinationHystoryService.create(createVaccinationHystoryDto);
  }

  @Get()
  findAll() {
    return this.vaccinationHystoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vaccinationHystoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVaccinationHystoryDto: UpdateVaccinationHystoryDto) {
    return this.vaccinationHystoryService.update(+id, updateVaccinationHystoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vaccinationHystoryService.remove(+id);
  }
}
