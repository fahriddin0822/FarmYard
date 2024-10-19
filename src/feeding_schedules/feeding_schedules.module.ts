import { Module } from '@nestjs/common';
import { FeedingSchedulesService } from './feeding_schedules.service';
import { FeedingSchedulesController } from './feeding_schedules.controller';

@Module({
  controllers: [FeedingSchedulesController],
  providers: [FeedingSchedulesService],
})
export class FeedingSchedulesModule {}
