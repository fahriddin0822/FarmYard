import { IsNotEmpty, IsString, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateWorkerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone_number: string;

  @IsNotEmpty()
  experience: number;

  @IsNotEmpty()
  salary: number;

  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty() // Ensure there's at least one role
  roleIds: number[]; // The IDs of the roles from WorkerRole table
}
