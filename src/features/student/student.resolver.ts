import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentResponse } from './model/student-response.model';
import { CreateStudentInput } from './dto/inputs/create-student.input';
import { UpdateStudentInput } from './dto/inputs/update-student.input';
import { GetCurrentUser } from '../auth/decorators/get-current-user.decorator';
import { CurrentUser } from '../auth/types/current-user.type';
import { Student } from '../../@generated/student/student.model';
import { AuthenticationNotRequired } from '../auth/decorators/authentication-not-required';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @AuthenticationNotRequired()
  @Mutation(() => StudentResponse)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.create(createStudentInput);
  }

  @Query(() => [Student], { name: 'student' })
  findAll() {
    return this.studentService.findAll();
  }

  @Query(() => Student, { name: 'student' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.studentService.findOne(id);
  }

  @Mutation(() => StudentResponse)
  updateStudent(
    @Args('updateStudentInput') updateStudentInput: UpdateStudentInput,
  ) {
    return this.studentService.update(
      updateStudentInput.id,
      updateStudentInput,
    );
  }

  @Mutation(() => StudentResponse)
  removeStudent(@Args('id', { type: () => Int }) id: number) {
    return this.studentService.remove(id);
  }
}
