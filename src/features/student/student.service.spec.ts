import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './student.service';
import { PrismaService } from '../../core/services/prisma/prisma.service';
import { StudentMock } from './mocks/student.mock';
import { StudentInputMock } from './mocks/studentInput.mock';
import { StudentUpdateInputMock } from './mocks/studentUpdateInput.mock';
import { CurrentUserMock } from '../../common/mocks/current-user.mock';

describe('StudentService', () => {
  let service: StudentService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    prismaService = {
      student: {} as any,
    } as PrismaService;
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentService,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    service = module.get<StudentService>(StudentService);
  });

  describe('create', () => {
    it('should be successful', async () => {
      prismaService.student.create = jest.fn().mockResolvedValue(StudentMock);
      const result = await service.create(StudentInputMock, CurrentUserMock);
      expect(result).toEqual(StudentMock);
    });
  });
  describe('getMany', () => {
    it('should be successful', async () => {
      const args = {
        where: {},
        skip: 0,
        take: 25,
      };
      prismaService.student.findMany = jest.fn().mockResolvedValue([StudentMock]);
      prismaService.student.count = jest.fn().mockResolvedValue(1);
      const result = await service.getMany(args, CurrentUserMock);
      expect(result).toEqual({
        items: [StudentMock],
        totalRecords: 1,
        currentPage: 1,
        pageSize: 25,
        totalPages: 1,
      });
    });
  });
  describe('findOne', () => {
    it('should be successful', async () => {
      prismaService.student.findUnique = jest
        .fn()
        .mockResolvedValue(StudentMock);
      const result = await service.findOne('1', CurrentUserMock);
      expect(result).toEqual(StudentMock);
    });
    it('should throw an error', async () => {
      prismaService.student.findUnique = jest.fn().mockResolvedValue(null);
      await expect(service.findOne('1', CurrentUserMock)).rejects.toThrowError();
    });
  });
  describe('update', () => {
    it('should be successful', async () => {
      prismaService.student.findUnique = jest
        .fn()
        .mockResolvedValue(StudentMock);
      prismaService.student.update = jest.fn().mockResolvedValue(StudentMock);
      const result = await service.update('1', StudentUpdateInputMock, CurrentUserMock);
      expect(result).toEqual(StudentMock);
    });
    it('should throw an error', async () => {
      prismaService.student.findUnique = jest.fn().mockResolvedValue(null);
      await expect(
        service.update('1', StudentUpdateInputMock, CurrentUserMock),
      ).rejects.toThrowError();
    });
  });
  describe('remove', () => {
    it('should be successful', async () => {
      prismaService.student.findUnique = jest
        .fn()
        .mockResolvedValue(StudentMock);
      prismaService.student.delete = jest.fn().mockResolvedValue(StudentMock);
      const result = await service.remove('1', CurrentUserMock);
      expect(result).toEqual(StudentMock);
    });
    it('should throw an error', async () => {
      prismaService.student.findUnique = jest.fn().mockResolvedValue(null);
      await expect(service.remove('1', CurrentUserMock)).rejects.toThrowError();
    });
  });
});
