import { CreateStudentInput } from './create-student.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateStudentInput extends PartialType(CreateStudentInput) {}
