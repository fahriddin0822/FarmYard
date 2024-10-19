import { PartialType } from '@nestjs/swagger';
import { CreateIllnessTypeDto } from './create-illness_type.dto';

export class UpdateIllnessTypeDto extends PartialType(CreateIllnessTypeDto) {}
