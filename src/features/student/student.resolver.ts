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
import { GetManyStudentsResponse } from './model/get-many-students-response';
import { FindManyStudentArgs } from '../../@generated/student/find-many-student.args';
import { StudentUpdateInput } from '../../@generated/student/student-update.input';
import { CreateOneStudentArgs } from '../../@generated/student/create-one-student.args';
import { GetCurrentUser } from '../auth/decorators/get-current-user.decorator';
import { CurrentUser } from '../auth/types/current-user.type';
import { NeedsPermission } from '../auth/decorators/needs-permissions.decorator';
import {
  AbilityAction,
  AppSubjects,
} from '../auth/casl-ability-factory.service';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @NeedsPermission(AbilityAction.Create, 'Student')
  @Mutation(() => Student)
  createStudent(
    @Args() createOneStudentArgs: CreateOneStudentArgs,
    @GetCurrentUser() currentUser: CurrentUser,
  ) {
    return this.studentService.create(createOneStudentArgs, currentUser);
  }

  @NeedsPermission(AbilityAction.Read, 'Student')
  @Query(() => GetManyStudentsResponse, { name: 'students' })
  getMany(
    @Args()
    options: FindManyStudentArgs,
    @GetCurrentUser() currentUser: CurrentUser,
  ) {
    return this.studentService.getMany(options, currentUser);
  }

  @NeedsPermission(AbilityAction.Read, 'Student')
  @Query(() => Student, { name: 'student' })
  findOne(
    @Args('id', { type: () => ID }) id: string,
    @GetCurrentUser() currentUser: CurrentUser,
  ) {
    return this.studentService.findOne(id, currentUser);
  }

  @NeedsPermission(AbilityAction.Update, 'Student')
  @Mutation(() => Student)
  updateStudent(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateStudentInput') updateStudentInput: StudentUpdateInput,
    @GetCurrentUser() currentUser: CurrentUser,
  ) {
    return this.studentService.update(id, updateStudentInput, currentUser);
  }

  @NeedsPermission(AbilityAction.Delete, 'Student')
  @Mutation(() => Student)
  removeStudent(
    @Args('id', { type: () => ID }) id: string,
    @GetCurrentUser() currentUser: CurrentUser,
  ) {
    return this.studentService.remove(id, currentUser);
  }

  @ResolveField()
  user(@Parent() student: Student) {
    return this.studentService.getOwnerOfStudent(student);
  }
}
