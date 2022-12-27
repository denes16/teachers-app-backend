import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateStudentInput } from './dto/inputs/create-student.input';
import { UpdateStudentInput } from './dto/inputs/update-student.input';
import { PrismaService } from '../../core/services/prisma/prisma.service';
import { Student } from '../../@generated/student/student.model';
import { FindManyStudentArgs } from '../../@generated/student/find-many-student.args';
import { NeedsPermission } from '../auth/decorators/needs-permissions.decorator';
import { CurrentUser } from '../auth/types/current-user.type';
import { AbilityAction } from '../auth/casl-ability-factory.service';

@Injectable()
export class StudentService {
  constructor(private prismaService: PrismaService) {}

  async create(createStudentInput: CreateStudentInput): Promise<Student> {
    return await this.prismaService.student.create({
      data: {
        ...createStudentInput,
      },
    });
  }

  async findAll(
    findManyStudentArgs: FindManyStudentArgs,
    currentUser: CurrentUser,
  ): Promise<Student[]> {
    const students = await this.prismaService.student.findMany({
      ...findManyStudentArgs,
    });
    // for (const student of students) {
    //   if (!currentUser.ability.can(AbilityAction.Read, student)) {
    //     throw new ForbiddenException();
    //   }
    // }
    return students;
  }

  async findOne(id: string): Promise<Student> {
    const student = await this.prismaService.student.findUnique({
      where: { id },
    });
    if (!student) {
      throw new NotFoundException('errors.studentNotFound');
    }
    return student;
  }

  async update(
    id: string,
    updateStudentInput: UpdateStudentInput,
  ): Promise<Student> {
    await this.findOne(id);
    return await this.prismaService.student.update({
      where: { id },
      data: {
        ...updateStudentInput,
      },
    });
  }

  async remove(id: string): Promise<Student> {
    await this.findOne(id);
    return await this.prismaService.student.delete({
      where: { id },
    });
  }
}
