import { CreateStudentsListInput } from './create-students-list.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentsListInput extends PartialType(CreateStudentsListInput) {
  @Field(() => Int)
  id: number;
}
