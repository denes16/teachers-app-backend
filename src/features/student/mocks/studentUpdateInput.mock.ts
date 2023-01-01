import { Genre } from '@prisma/client';
import { StudentUpdateInput } from '../../../@generated/student/student-update.input';

export const StudentUpdateInputMock: StudentUpdateInput = {
  firstName: 'Ruby',
  firstLastName: 'Mercedes',
  secondLastName: 'Flores',
  phone: '1234567890',
  address: '1234 Av',
  genre: Genre.MALE,
  birthDate: new Date(),
  comments: 'This is not a comment',
  tutorFullName: 'John Doe',
  extraPhone: '1234567890',
  modelName: 'Student',
  createdAt: new Date(),
  updatedAt: new Date(),
};
