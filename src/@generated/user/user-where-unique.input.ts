import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserWhereUniqueInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @HideField()
    resetPasswordToken?: string;
}
