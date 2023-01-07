import { Injectable } from '@nestjs/common';
import { CreateStudentsListInput } from './dto/create-students-list.input';
import { UpdateStudentsListInput } from './dto/update-students-list.input';

@Injectable()
export class StudentsListService {
  create(createStudentsListInput: CreateStudentsListInput) {
    return 'This action adds a new studentsList';
  }

  findAll() {
    return `This action returns all studentsList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentsList`;
  }

  update(id: number, updateStudentsListInput: UpdateStudentsListInput) {
    return `This action updates a #${id} studentsList`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentsList`;
  }
}
