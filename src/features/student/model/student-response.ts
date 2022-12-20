import { Student } from '../../../@generated/student/student.model';
import { ObjectType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ObjectType()
export class StudentResponse {
  // @Field(() => Array<T = any>)
  // items: Array<T = any>;
}
