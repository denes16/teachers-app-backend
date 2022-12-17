import { InputType, Int, Field } from '@nestjs/graphql';
import { IsBoolean, IsString, IsDate } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @Field(() => String)
  @IsString()
  firstName: string;

  @Field(() => String)
  @IsString()
  firstLastName: string;

  @Field(() => String)
  @IsString()
  secondLastName: string;

  @Field(() => String)
  @IsString()
  phone: string;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => Boolean)
  @IsBoolean()
  genre: boolean;

  @Field(() => Date)
  @IsDate()
  birthdate: Date;

  @Field(() => String)
  @IsString()
  comments: string;

  @Field(() => String)
  @IsString()
  tutorFullName: string;

  @Field(() => String)
  @IsString()
  extraPhone: string;
}
