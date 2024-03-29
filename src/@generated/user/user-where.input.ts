import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumAuthProviderFilter } from '../prisma/enum-auth-provider-filter.input';
import { StudentListRelationFilter } from '../student/student-list-relation-filter.input';
import { StudentsListListRelationFilter } from '../students-list/students-list-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @HideField()
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    language?: StringFilter;

    @HideField()
    password?: StringNullableFilter;

    @HideField()
    resetPasswordToken?: StringNullableFilter;

    @HideField()
    resetPasswordTokenExpires?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @HideField()
    modelName?: StringFilter;

    @HideField()
    authProvider?: EnumAuthProviderFilter;

    @HideField()
    authProviderId?: StringNullableFilter;

    @HideField()
    student?: StudentListRelationFilter;

    @HideField()
    studentsList?: StudentsListListRelationFilter;
}
