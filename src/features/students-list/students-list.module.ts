import { Module } from '@nestjs/common';
import { StudentsListService } from './students-list.service';
import { StudentsListResolver } from './students-list.resolver';

@Module({
  providers: [StudentsListResolver, StudentsListService]
})
export class StudentsListModule {}
