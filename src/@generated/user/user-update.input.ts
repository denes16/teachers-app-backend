import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AuthProvider } from '../prisma/auth-provider.enum';
import { StudentUpdateManyWithoutUserNestedInput } from '../student/student-update-many-without-user-nested.input';
import { StudentsListUpdateManyWithoutUserNestedInput } from '../students-list/students-list-update-many-without-user-nested.input';

@InputType()
export class UserUpdateInput {

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    language?: string;

    @HideField()
    password?: string;

    @HideField()
    resetPasswordToken?: string;

    @HideField()
    resetPasswordTokenExpires?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @HideField()
    modelName?: string;

    @HideField()
    authProvider?: keyof typeof AuthProvider;

    @HideField()
    authProviderId?: string;

    @HideField()
    student?: StudentUpdateManyWithoutUserNestedInput;

    @Field(() => StudentsListUpdateManyWithoutUserNestedInput, {nullable:true})
    StudentsList?: StudentsListUpdateManyWithoutUserNestedInput;
}
