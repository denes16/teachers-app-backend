import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { StudentsListService } from './students-list.service';
import { StudentsListUpdateInput } from './../../@generated/students-list/students-list-update.input';
import { FindManyStudentsListArgs } from '../../@generated/students-list/find-many-students-list.args';
import { CurrentUser } from '../auth/types/current-user.type';
import { GetCurrentUser } from '../auth/decorators/get-current-user.decorator';
import { StudentsList } from './../../@generated/students-list/students-list.model';
import { GetManyStudentsListResponse } from './model/get-many-students-list-response';
import { NeedsPermission } from '../auth/decorators/needs-permissions.decorator';
import { AbilityAction } from '../auth/casl-ability-factory.service';
import { CreateOneStudentsListArgs } from '../../@generated/students-list/create-one-students-list.args';
import { Student } from '../../@generated/student/student.model';

@Resolver(() => StudentsList)
export class StudentsListResolver {
  constructor(private readonly studentsListService: StudentsListService) {}

  @NeedsPermission(AbilityAction.Create, 'StudentsList')
  @Mutation(() => StudentsList)
  createStudentsList(
    @Args() createOneStudentsListArgs: CreateOneStudentsListArgs,
    @GetCurrentUser() currentUser: CurrentUser,
  ) {
    return this.studentsListService.create(
      createOneStudentsListArgs,
      currentUser,
    );
  }

  @NeedsPermission(AbilityAction.Read, 'StudentsList')
  @Query(() => GetManyStudentsListResponse, { name: 'studentsListAll' })
  findAll(
    @Args()
    options: FindManyStudentsListArgs,
    @GetCurrentUser() currentUser: CurrentUser,
  ) {
    return this.studentsListService.findAll(options, currentUser);
  }

  @NeedsPermission(AbilityAction.Read, 'StudentsList')
  @Query(() => StudentsList, { name: 'studentsList' })
  findOne(
    @Args('id', { type: () => ID }) id: string,
    @GetCurrentUser() currentUser: CurrentUser,
  ) {
    return this.studentsListService.findOne(id, currentUser);
  }

  @NeedsPermission(AbilityAction.Update, 'StudentsList')
  @Mutation(() => StudentsList)
  updateStudentsList(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateStudentsListInput')
    updateStudentsListInput: StudentsListUpdateInput,
    @GetCurrentUser() currentUser: CurrentUser,
  ) {
    return this.studentsListService.update(
      id,
      updateStudentsListInput,
      currentUser,
    );
  }

  @NeedsPermission(AbilityAction.Delete, 'StudentsList')
  @Mutation(() => StudentsList)
  removeStudentsList(
    @Args('id', { type: () => ID }) id: string,
    @GetCurrentUser() currentUser: CurrentUser,
  ) {
    return this.studentsListService.remove(id, currentUser);
  }

  @ResolveField()
  students(
    @Parent() studentList: StudentsList,
    @GetCurrentUser() currentUser: CurrentUser,
  ) {
    return this.studentsListService.getStudents(studentList, currentUser);
  }
  @ResolveField()
  user(
    @Parent() studentList: StudentsList,
    @GetCurrentUser() currentUser: CurrentUser,
  ) {
    return this.studentsListService.getOwner(studentList, currentUser);
  }
}
