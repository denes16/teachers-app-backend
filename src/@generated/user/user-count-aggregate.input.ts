import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {

    @HideField()
    id?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    language?: true;

    @HideField()
    password?: true;

    @HideField()
    resetPasswordToken?: true;

    @HideField()
    resetPasswordTokenExpires?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    isActive?: true;

    @HideField()
    modelName?: true;

    @HideField()
    authProvider?: true;

    @HideField()
    authProviderId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
