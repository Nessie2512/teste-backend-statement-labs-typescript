import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckingDto } from './create-checking.dto';

export class UpdateCheckingDto extends PartialType(CreateCheckingDto) {}
