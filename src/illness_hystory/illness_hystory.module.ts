import { Module } from '@nestjs/common';
import { IllnessHystoryService } from './illness_hystory.service';
import { IllnessHystoryController } from './illness_hystory.controller';

@Module({
  controllers: [IllnessHystoryController],
  providers: [IllnessHystoryService],
})
export class IllnessHystoryModule {}
