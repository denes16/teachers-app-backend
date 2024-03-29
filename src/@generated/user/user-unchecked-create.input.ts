import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AuthProvider } from '../prisma/auth-provider.enum';
import { StudentUncheckedCreateNestedManyWithoutUserInput } from '../student/student-unchecked-create-nested-many-without-user.input';
import { StudentsListUncheckedCreateNestedManyWithoutUserInput } from '../students-list/students-list-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

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
    student?: StudentUncheckedCreateNestedManyWithoutUserInput;

    @HideField()
    studentsList?: StudentsListUncheckedCreateNestedManyWithoutUserInput;
}
