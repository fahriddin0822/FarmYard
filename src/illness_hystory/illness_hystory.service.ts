import { Injectable } from '@nestjs/common';
import { CreateIllnessHystoryDto } from './dto/create-illness_hystory.dto';
import { UpdateIllnessHystoryDto } from './dto/update-illness_hystory.dto';

@Injectable()
export class IllnessHystoryService {
  create(createIllnessHystoryDto: CreateIllnessHystoryDto) {
    return 'This action adds a new illnessHystory';
  }

  findAll() {
    return `This action returns all illnessHystory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} illnessHystory`;
  }

  update(id: number, updateIllnessHystoryDto: UpdateIllnessHystoryDto) {
    return `This action updates a #${id} illnessHystory`;
  }

  remove(id: number) {
    return `This action removes a #${id} illnessHystory`;
  }
}
