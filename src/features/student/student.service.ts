import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../core/services/prisma/prisma.service';
import { Student } from '../../@generated/student/student.model';
import { GetManyStudentsResponse } from './model/get-many-students-response';
import { FindManyStudentArgs } from '../../@generated/student/find-many-student.args';
import { StudentUpdateInput } from '../../@generated/student/student-update.input';
import { CreateOneStudentArgs } from '../../@generated/student/create-one-student.args';
import { User } from '@prisma/client';
import { CurrentUser } from '../auth/types/current-user.type';
import { AbilityAction } from '../auth/casl-ability-factory.service';
import { accessibleBy } from '@casl/prisma';
import { Logger } from '@nestjs/common/services';

@Injectable()
export class StudentService {
  constructor(private prismaService: PrismaService) {}

  async create(createOneStudentArgs: CreateOneStudentArgs, currentUser: CurrentUser): Promise<Student> {
    let student = new Student();
    Object.assign(student, createOneStudentArgs.data);
    student.modelName = 'Student';
    if (!currentUser.ability.can(AbilityAction.Create, student)) {
      throw new ForbiddenException('errors.forbidden');
    }
    return await this.prismaService.student.create(createOneStudentArgs);
  }

  async getOwnerOfStudent(student: Student): Promise<User> {
    return await this.prismaService.student
      .findUnique({ where: { id: student.id } })
      .user();
  }

  async getMany(
    options?: FindManyStudentArgs,
    currentUser?: CurrentUser,
  ): Promise<GetManyStudentsResponse> {
    const { where, ...rest } = options
    const items = await this.prismaService.student.findMany({
      where: {
        ...where,
        AND: [
          accessibleBy(currentUser?.ability).Student,
        ]
      },
      ...rest,
    });
    const totalRecords = await this.prismaService.student.count({
      where: {
        ...where,
        AND: [
          accessibleBy(currentUser?.ability).Student,
        ]
      },
    });
    return new GetManyStudentsResponse({
      items,
      totalRecords,
      limit: options?.take,
      skip: options?.skip,
    });
  }

  async findOne(id: string, currentUser: CurrentUser): Promise<Student> {
    const student = await this.prismaService.student.findUnique({
      where: {
        id,
      },
    });
    if (!student) {
      throw new NotFoundException('errors.studentNotFound');
    }
    if (!currentUser.ability.can(AbilityAction.Read, student)) {
      throw new ForbiddenException('errors.forbidden');
    }
    return student;
  }

  async update(
    id: string,
    updateStudentInput: StudentUpdateInput,
    currentUser: CurrentUser,
  ): Promise<Student> {
    const student = await this.findOne(id, currentUser);
    if (!currentUser.ability.can(AbilityAction.Update, student)) {
      throw new ForbiddenException('errors.forbidden');
    }
    return await this.prismaService.student.update({
      where: {
        id
      },
      data: {
        ...updateStudentInput,
      },
    });
  }

  async remove(id: string, currentUser: CurrentUser): Promise<Student> {
    const student = await this.findOne(id, currentUser);
    if (!currentUser.ability.can(AbilityAction.Delete, student)) {
      throw new ForbiddenException('errors.forbidden');
    }
    return await this.prismaService.student.delete({
      where: { id },
    });
  }
}
