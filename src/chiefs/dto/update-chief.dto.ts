import { PartialType } from '@nestjs/mapped-types';
import { CreateChiefDto } from './create-chief.dto';

export class UpdateChiefDto extends PartialType(CreateChiefDto) {}
