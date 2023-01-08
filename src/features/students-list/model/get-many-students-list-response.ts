import { StudentsList } from './../../../@generated/students-list/students-list.model';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BasePaginatedResponseModel } from '../../../common/models/base-paginated-response.model';

@ObjectType()
export class GetManyStudentsListResponse extends BasePaginatedResponseModel<StudentsList> {
  @Field(() => [StudentsList])
  items: StudentsList[];
}
