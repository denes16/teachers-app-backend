import { BasePaginatedResponseModel } from '../../../common/models/base-paginated-response.model';
import { Student } from '../../../@generated/student/student.model';
import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class GetManyStudentsResponse extends BasePaginatedResponseModel<Student> {
  @Field(() => [Student])
  items: Student[];
}
