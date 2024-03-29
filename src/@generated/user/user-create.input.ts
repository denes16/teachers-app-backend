import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AuthProvider } from '../prisma/auth-provider.enum';
import { StudentCreateNestedManyWithoutUserInput } from '../student/student-create-nested-many-without-user.input';
import { StudentsListCreateNestedManyWithoutUserInput } from '../students-list/students-list-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

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
    student?: StudentCreateNestedManyWithoutUserInput;

    @HideField()
    studentsList?: StudentsListCreateNestedManyWithoutUserInput;
}
