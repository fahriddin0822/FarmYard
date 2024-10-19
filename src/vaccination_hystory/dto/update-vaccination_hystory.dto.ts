import { PartialType } from '@nestjs/swagger';
import { CreateVaccinationHystoryDto } from './create-vaccination_hystory.dto';

export class UpdateVaccinationHystoryDto extends PartialType(CreateVaccinationHystoryDto) {}
