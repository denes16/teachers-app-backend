import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentsListService } from './students-list.service';
import { StudentsList } from './entities/students-list.entity';
import { CreateStudentsListInput } from './dto/create-students-list.input';
import { UpdateStudentsListInput } from './dto/update-students-list.input';

@Resolver(() => StudentsList)
export class StudentsListResolver {
  constructor(private readonly studentsListService: StudentsListService) {}

  @Mutation(() => StudentsList)
  createStudentsList(@Args('createStudentsListInput') createStudentsListInput: CreateStudentsListInput) {
    return this.studentsListService.create(createStudentsListInput);
  }

  @Query(() => [StudentsList], { name: 'studentsList' })
  findAll() {
    return this.studentsListService.findAll();
  }

  @Query(() => StudentsList, { name: 'studentsList' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.studentsListService.findOne(id);
  }

  @Mutation(() => StudentsList)
  updateStudentsList(@Args('updateStudentsListInput') updateStudentsListInput: UpdateStudentsListInput) {
    return this.studentsListService.update(updateStudentsListInput.id, updateStudentsListInput);
  }

  @Mutation(() => StudentsList)
  removeStudentsList(@Args('id', { type: () => Int }) id: number) {
    return this.studentsListService.remove(id);
  }
}
