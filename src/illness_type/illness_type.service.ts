import { Injectable } from '@nestjs/common';
import { CreateIllnessTypeDto } from './dto/create-illness_type.dto';
import { UpdateIllnessTypeDto } from './dto/update-illness_type.dto';

@Injectable()
export class IllnessTypeService {
  create(createIllnessTypeDto: CreateIllnessTypeDto) {
    return 'This action adds a new illnessType';
  }

  findAll() {
    return `This action returns all illnessType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} illnessType`;
  }

  update(id: number, updateIllnessTypeDto: UpdateIllnessTypeDto) {
    return `This action updates a #${id} illnessType`;
  }

  remove(id: number) {
    return `This action removes a #${id} illnessType`;
  }
}
