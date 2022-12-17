import { Injectable, ForbiddenException } from '@nestjs/common';
import { CreateStudentInput } from './dto/inputs/create-student.input';
import { UpdateStudentInput } from './dto/inputs/update-student.input';
import { CurrentUser } from '../auth/types/current-user.type';
import { PrismaService } from '../../core/services/prisma/prisma.service';
import { NeedsPermission } from '../auth/decorators/needs-permissions.decorator';
import { AbilityAction } from '../auth/casl-ability-factory.service';
import { StudentResponse } from './model/student-response.model';

@Injectable()
export class StudentService {
  constructor(private prismaService: PrismaService) {}

  async create(
    createStudentInput: CreateStudentInput,
  ): Promise<StudentResponse> {
    const student = await this.prismaService.student.create({
      data: {
        firstName: createStudentInput.firstName,
        firstLastName: createStudentInput.firstLastName,
        secondLastName: createStudentInput.secondLastName,
        phone: createStudentInput.phone,
        address: createStudentInput.address,
        genre: createStudentInput.genre,
        birthdate: createStudentInput.birthdate,
        comments: createStudentInput.comments,
        tutorFullName: createStudentInput.tutorFullName,
        extraPhone: createStudentInput.extraPhone,
      },
    });
    return { student };
  }

  findAll() {
    return `This action returns all student`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentInput: UpdateStudentInput) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
