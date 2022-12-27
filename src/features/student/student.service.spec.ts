import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './student.service';
import { PrismaService } from '../../core/services/prisma/prisma.service';
import { StudentMock } from './mocks/student.mock';
import { StudentInputMock } from './mocks/studentInput.mock';

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
      const result = await service.create(StudentInputMock);
      expect(result).toEqual(StudentMock);
    });
  });
  describe('findAll', () => {
    it('should be successful', async () => {
      prismaService.student.findMany = jest
        .fn()
        .mockResolvedValue([StudentMock]);
      const result = await service.getMany();
      expect(result).toEqual([StudentMock]);
    });
  });
  describe('findOne', () => {
    it('should be successful', async () => {
      prismaService.student.findUnique = jest
        .fn()
        .mockResolvedValue(StudentMock);
      const result = await service.findOne('1');
      expect(result).toEqual(StudentMock);
    });
    it('should throw an error', async () => {
      prismaService.student.findUnique = jest.fn().mockResolvedValue(null);
      await expect(service.findOne('1')).rejects.toThrowError();
    });
  });
  describe('update', () => {
    it('should be successful', async () => {
      prismaService.student.findUnique = jest
        .fn()
        .mockResolvedValue(StudentMock);
      prismaService.student.update = jest.fn().mockResolvedValue(StudentMock);
      const result = await service.update('1', StudentInputMock);
      expect(result).toEqual(StudentMock);
    });
    it('should throw an error', async () => {
      prismaService.student.findUnique = jest.fn().mockResolvedValue(null);
      await expect(
        service.update('1', StudentInputMock),
      ).rejects.toThrowError();
    });
  });
  describe('remove', () => {
    it('should be successful', async () => {
      prismaService.student.findUnique = jest
        .fn()
        .mockResolvedValue(StudentMock);
      prismaService.student.delete = jest.fn().mockResolvedValue(StudentMock);
      const result = await service.remove('1');
      expect(result).toEqual(StudentMock);
    });
    it('should throw an error', async () => {
      prismaService.student.findUnique = jest.fn().mockResolvedValue(null);
      await expect(service.remove('1')).rejects.toThrowError();
    });
  });
});
