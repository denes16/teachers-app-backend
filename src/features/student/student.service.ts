import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentInput } from './dto/inputs/create-student.input';
import { UpdateStudentInput } from './dto/inputs/update-student.input';
import { PrismaService } from '../../core/services/prisma/prisma.service';
import { StudentResponse } from './model/student-response.model';
import { Student } from '../../@generated/student/student.model';

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

  async findAll(): Promise<Student[]> {
    return await this.prismaService.student.findMany();
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
