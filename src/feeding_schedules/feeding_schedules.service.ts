import { Injectable } from '@nestjs/common';
import { CreateFeedingScheduleDto } from './dto/create-feeding_schedule.dto';
import { UpdateFeedingScheduleDto } from './dto/update-feeding_schedule.dto';

@Injectable()
export class FeedingSchedulesService {
  create(createFeedingScheduleDto: CreateFeedingScheduleDto) {
    return 'This action adds a new feedingSchedule';
  }

  findAll() {
    return `This action returns all feedingSchedules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feedingSchedule`;
  }

  update(id: number, updateFeedingScheduleDto: UpdateFeedingScheduleDto) {
    return `This action updates a #${id} feedingSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} feedingSchedule`;
  }
}
