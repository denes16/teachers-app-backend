import { Test, TestingModule } from '@nestjs/testing';
import { StudentsListService } from './students-list.service';
import { PrismaService } from '../../core/services/prisma/prisma.service';
import { StudentsListMock } from './mocks/studentsList.mock';
import { CurrentUserMock } from '../../common/mocks/current-user.mock';

describe('StudentsListService', () => {
  let service: StudentsListService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    prismaService = {
      studentsList: {} as any,
      student: {} as any,
    } as PrismaService;
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentsListService,
        {
          provide: PrismaService,
          useValue: prismaService,
        }
      ],
    }).compile();

    service = module.get<StudentsListService>(StudentsListService);
  });

  describe('getMany', () => {
    it('should be successful', async () => {
      const args = {
        where: {},
        skip: 0,
        take: 25,
      };
      prismaService.studentsList.findMany = jest.fn().mockResolvedValue([StudentsListMock]);
      prismaService.studentsList.count = jest.fn().mockResolvedValue(1);
      const result = await service.findAll(args, CurrentUserMock);
      expect(result).toEqual({
        items: [StudentsListMock],
        totalRecords: 1,
        currentPage: 1,
        pageSize: 25,
        totalPages: 1,
      });
    });
  });
  describe('findOne', () => {
    it('should be successful', async () => {
      prismaService.studentsList.findUnique = jest
        .fn()
        .mockResolvedValue(StudentsListMock);
      const result = await service.findOne('1', CurrentUserMock);
      expect(result).toEqual(StudentsListMock);
    });
    it('should throw an error', async () => {
      prismaService.studentsList.findUnique = jest.fn().mockResolvedValue(null);
      await expect(service.findOne('1', CurrentUserMock)).rejects.toThrowError();
    });
  });
  describe('create', () => {
    it('should be successfull with array of students empty', async () => {
      prismaService.student.findMany = jest.fn().mockResolvedValue([]);
      prismaService.studentsList.create = jest.fn().mockResolvedValue(StudentsListMock);
      const result = await service.create({ data: StudentsListMock }, CurrentUserMock);
      expect(result).toEqual(StudentsListMock);
    });
    it('should be successfull with a non-empty student array', async () => {
      StudentsListMock.studentIds = ['1'];
      prismaService.student.findMany = jest.fn().mockResolvedValue([StudentsListMock]);
      prismaService.studentsList.create = jest.fn().mockResolvedValue(StudentsListMock);
      const result = await service.create({ data: StudentsListMock }, CurrentUserMock);
      expect(result).toEqual(StudentsListMock);
    });
    it('should throw an error', async () => {
      prismaService.student.findMany = jest.fn().mockResolvedValue([StudentsListMock]);
      await expect(service.create({ data: StudentsListMock }, CurrentUserMock)).rejects.toThrowError();
    });
  });
  describe('update', () => {
    it('should be successful', async () => {
      prismaService.studentsList.findUnique = jest.fn().mockResolvedValue(StudentsListMock);
      prismaService.studentsList.update = jest.fn().mockResolvedValue(StudentsListMock);
      const result = await service.update(
        '1',
        StudentsListMock,
        CurrentUserMock,
      );
      expect(result).toEqual(StudentsListMock);
    });
    it('should throw an error', async () => {
      prismaService.studentsList.findUnique = jest.fn().mockResolvedValue(null);
      await expect(
        service.update('1', StudentsListMock, CurrentUserMock),
      ).rejects.toThrowError();
    });
  });
  describe('remove', () => {
    it('should be successful', async () => {
      prismaService.studentsList.findUnique = jest
        .fn()
        .mockResolvedValue(StudentsListMock);
      prismaService.studentsList.delete = jest.fn().mockResolvedValue(StudentsListMock);
      const result = await service.remove('1', CurrentUserMock);
      expect(result).toEqual(StudentsListMock);
    });
    it('should throw an error', async () => {
      prismaService.studentsList.findUnique = jest.fn().mockResolvedValue(null);
      await expect(service.remove('1', CurrentUserMock)).rejects.toThrowError();
    });
  });
});
