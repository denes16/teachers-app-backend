
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../core/services/prisma/prisma.service';
import { Student } from '../../@generated/student/student.model';
import { GetManyStudentsResponse } from './model/get-many-students-response';
import { FindManyStudentArgs } from '../../@generated/student/find-many-student.args';
import { StudentUpdateInput } from '../../@generated/student/student-update.input';
import { CreateOneStudentArgs } from '../../@generated/student/create-one-student.args';
import { User } from '@prisma/client';

@Injectable()
export class StudentService {
  constructor(private prismaService: PrismaService) {}

  async create(createOneStudentArgs: CreateOneStudentArgs): Promise<Student> {
    return await this.prismaService.student.create(createOneStudentArgs);
  }


  async getOwnerOfStudent(student: Student): Promise<User> {
    return await this.prismaService.student
      .findUnique({ where: { id: student.id } })
      .user();
  }

  async getMany(
    options?: FindManyStudentArgs,
  ): Promise<GetManyStudentsResponse> {
    const items = await this.prismaService.student.findMany(options);
    const totalRecords = await this.prismaService.student.count({
      where: options?.where,
    });
    return new GetManyStudentsResponse({
      items,
      totalRecords,
      limit: options?.take,
      skip: options?.skip,
    });
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
    updateStudentInput: StudentUpdateInput,
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
