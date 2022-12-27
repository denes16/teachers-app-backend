import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from '../../@generated/student/student.model';
import { AuthenticationNotRequired } from '../auth/decorators/authentication-not-required';
import { GetManyStudentsResponse } from './model/get-many-students-response';
import { FindManyStudentArgs } from '../../@generated/student/find-many-student.args';
import { StudentUpdateInput } from '../../@generated/student/student-update.input';
import { CreateOneStudentArgs } from '../../@generated/student/create-one-student.args';

@AuthenticationNotRequired()
@Resolver(() => Student)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation(() => Student)
  createStudent(@Args() createOneStudentArgs: CreateOneStudentArgs) {
    return this.studentService.create(createOneStudentArgs);
  }

  @Query(() => GetManyStudentsResponse, { name: 'students' })
  getMany(
    @Args()
    options: FindManyStudentArgs,
  ) {
    return this.studentService.getMany(options);
  }

  @Query(() => Student, { name: 'student' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.studentService.findOne(id);
  }

  @Mutation(() => Student)
  updateStudent(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateStudentInput') updateStudentInput: StudentUpdateInput,
  ) {
    return this.studentService.update(id, updateStudentInput);
  }

  @Mutation(() => Student)
  removeStudent(@Args('id', { type: () => ID }) id: string) {
    return this.studentService.remove(id);
  }
  @ResolveField(() => String)
  user(@Parent() student: Student) {
    return this.studentService.getOwnerOfStudent(student);
  }
}
