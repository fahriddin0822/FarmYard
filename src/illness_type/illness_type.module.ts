import { Module } from '@nestjs/common';
import { IllnessTypeService } from './illness_type.service';
import { IllnessTypeController } from './illness_type.controller';

@Module({
  controllers: [IllnessTypeController],
  providers: [IllnessTypeService],
})
export class IllnessTypeModule {}
