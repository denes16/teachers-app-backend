import { Test, TestingModule } from '@nestjs/testing';
import { StudentsListResolver } from './students-list.resolver';
import { StudentsListService } from './students-list.service';
import { PrismaService } from '../../core/services/prisma/prisma.service';

describe('StudentsListResolver', () => {
  let resolver: StudentsListResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsListResolver, StudentsListService, PrismaService],
    }).compile();

    resolver = module.get<StudentsListResolver>(StudentsListResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
