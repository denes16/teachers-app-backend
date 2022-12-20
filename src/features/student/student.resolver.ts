import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { CreateStudentInput } from './dto/inputs/create-student.input';
import { UpdateStudentInput } from './dto/inputs/update-student.input';
import { Student } from '../../@generated/student/student.model';
import { AuthenticationNotRequired } from '../auth/decorators/authentication-not-required';

@AuthenticationNotRequired()
@Resolver(() => Student)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation(() => Student)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.create(createStudentInput);
  }

  @Query(() => [Student], { name: 'students' })
  findAll() {
    return this.studentService.findAll();
  }

  @Query(() => Student, { name: 'student' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.studentService.findOne(id);
  }

  @Mutation(() => Student)
  updateStudent(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateStudentInput') updateStudentInput: UpdateStudentInput,
  ) {
    return this.studentService.update(id, updateStudentInput);
  }

  @Mutation(() => Student)
  removeStudent(@Args('id', { type: () => ID }) id: string) {
    return this.studentService.remove(id);
  }
}
