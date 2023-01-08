import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { StudentOrderByRelationAggregateInput } from '../student/student-order-by-relation-aggregate.input';
import { StudentsListOrderByRelationAggregateInput } from '../students-list/students-list-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @HideField()
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language?: keyof typeof SortOrder;

    @HideField()
    password?: keyof typeof SortOrder;

    @HideField()
    resetPasswordToken?: keyof typeof SortOrder;

    @HideField()
    resetPasswordTokenExpires?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @HideField()
    modelName?: keyof typeof SortOrder;

    @HideField()
    authProvider?: keyof typeof SortOrder;

    @HideField()
    authProviderId?: keyof typeof SortOrder;

    @HideField()
    student?: StudentOrderByRelationAggregateInput;

    @Field(() => StudentsListOrderByRelationAggregateInput, {nullable:true})
    StudentsList?: StudentsListOrderByRelationAggregateInput;
}
