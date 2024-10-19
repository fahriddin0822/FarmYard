import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeedingSchedulesService } from './feeding_schedules.service';
import { CreateFeedingScheduleDto } from './dto/create-feeding_schedule.dto';
import { UpdateFeedingScheduleDto } from './dto/update-feeding_schedule.dto';

@Controller('feeding-schedules')
export class FeedingSchedulesController {
  constructor(private readonly feedingSchedulesService: FeedingSchedulesService) {}

  @Post()
  create(@Body() createFeedingScheduleDto: CreateFeedingScheduleDto) {
    return this.feedingSchedulesService.create(createFeedingScheduleDto);
  }

  @Get()
  findAll() {
    return this.feedingSchedulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedingSchedulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeedingScheduleDto: UpdateFeedingScheduleDto) {
    return this.feedingSchedulesService.update(+id, updateFeedingScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedingSchedulesService.remove(+id);
  }
}
