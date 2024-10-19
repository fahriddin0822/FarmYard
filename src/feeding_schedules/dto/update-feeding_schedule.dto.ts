import { PartialType } from '@nestjs/swagger';
import { CreateFeedingScheduleDto } from './create-feeding_schedule.dto';

export class UpdateFeedingScheduleDto extends PartialType(CreateFeedingScheduleDto) {}
