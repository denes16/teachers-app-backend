import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserUncheckedCreateInput } from './user-unchecked-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserArgs {

    @Field(() => UserUncheckedCreateInput, {nullable:false})
    @Type(() => UserUncheckedCreateInput)
    data!: UserUncheckedCreateInput;
}
