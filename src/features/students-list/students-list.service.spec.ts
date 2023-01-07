import { Test, TestingModule } from '@nestjs/testing';
import { StudentsListService } from './students-list.service';

describe('StudentsListService', () => {
  let service: StudentsListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsListService],
    }).compile();

    service = module.get<StudentsListService>(StudentsListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
