import { CreateOneStudentsListArgs } from './../../@generated/students-list/create-one-students-list.args';
import { StudentsList } from './../../@generated/students-list/students-list.model';
import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../core/services/prisma/prisma.service';
import { GetManyStudentsListResponse } from './model/get-many-students-list-response';
import { FindManyStudentsListArgs } from '../../@generated/students-list/find-many-students-list.args';
import { CurrentUser } from '../auth/types/current-user.type';
import { accessibleBy } from '@casl/prisma';
import { StudentsListUpdateInput } from '../../@generated/students-list/students-list-update.input';
import { AbilityAction } from '../auth/casl-ability-factory.service';

@Injectable()
export class StudentsListService {
  constructor(private prismaService: PrismaService) {}

  async create(createOneStudentsListArgs: CreateOneStudentsListArgs, currentUser: CurrentUser) {
    let studentsList = new StudentsList();
    Object.assign(studentsList, createOneStudentsListArgs.data);
    studentsList.modelName = 'StudentsList';
    if (!currentUser.ability.can(AbilityAction.Create, studentsList)) {
      throw new ForbiddenException('errors.forbidden');
    }
    return await this.prismaService.studentsList.create(createOneStudentsListArgs);
  }

  async findAll(
    options?: FindManyStudentsListArgs,
    currentUser?: CurrentUser,
  ): Promise<GetManyStudentsListResponse> {
    const { where, ...rest } = options
    const query = {
      where: {
        ...where,
        AND: [
          accessibleBy(currentUser?.ability).StudentsList,
        ]
      },
    }
    const items = await this.prismaService.studentsList.findMany({ ...query, ...rest });
    const totalRecords = await this.prismaService.studentsList.count(query);
    return new GetManyStudentsListResponse({
      items,
      totalRecords,
      limit: options?.take,
      skip: options?.skip,
    });
  }

  async findOne(id: string, currentUser: CurrentUser) {
    const studentsList = await this.prismaService.studentsList.findUnique({
      where: {
        id,
      },
    });
    if (!studentsList) {
      throw new NotFoundException('errors.studentNotFound');
    }
    if (!currentUser.ability.can(AbilityAction.Read, studentsList)) {
      throw new ForbiddenException('errors.forbidden');
    }
    return studentsList;
  }

  async update(id: string, updateStudentsListInput: StudentsListUpdateInput) {
    // const student = await this.findOne(id, currentUser);
    // if (!currentUser.ability.can(AbilityAction.Update, student)) {
    //   throw new ForbiddenException('errors.forbidden');
    // }
    return await this.prismaService.student.update({
      where: {
        id
      },
      data: {
        ...updateStudentsListInput,
      },
    });
  }

  async remove(id: string, currentUser: CurrentUser): Promise<StudentsList> {
    const studentsList = await this.findOne(id, currentUser);
    if (!currentUser.ability.can(AbilityAction.Delete, studentsList)) {
      throw new ForbiddenException('errors.forbidden');
    }
    return await this.prismaService.studentsList.delete({
      where: { id },
    });
  }
}
