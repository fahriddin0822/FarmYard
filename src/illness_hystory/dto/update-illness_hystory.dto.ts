import { PartialType } from '@nestjs/swagger';
import { CreateIllnessHystoryDto } from './create-illness_hystory.dto';

export class UpdateIllnessHystoryDto extends PartialType(CreateIllnessHystoryDto) {}
