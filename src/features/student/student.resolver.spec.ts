import { Test, TestingModule } from '@nestjs/testing';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';
import { PrismaService } from '../../core/services/prisma/prisma.service';

describe('StudentResolver', () => {
  let resolver: StudentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentResolver, StudentService, PrismaService],
    }).compile();

    resolver = module.get<StudentResolver>(StudentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
