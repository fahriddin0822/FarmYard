import { Injectable } from '@nestjs/common';
import { CreateVaccinationHystoryDto } from './dto/create-vaccination_hystory.dto';
import { UpdateVaccinationHystoryDto } from './dto/update-vaccination_hystory.dto';

@Injectable()
export class VaccinationHystoryService {
  create(createVaccinationHystoryDto: CreateVaccinationHystoryDto) {
    return 'This action adds a new vaccinationHystory';
  }

  findAll() {
    return `This action returns all vaccinationHystory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vaccinationHystory`;
  }

  update(id: number, updateVaccinationHystoryDto: UpdateVaccinationHystoryDto) {
    return `This action updates a #${id} vaccinationHystory`;
  }

  remove(id: number) {
    return `This action removes a #${id} vaccinationHystory`;
  }
}
