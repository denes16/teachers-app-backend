import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentsListInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
