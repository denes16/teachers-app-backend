import { Genre } from '@prisma/client';
import { Student } from '../../../@generated/student/student.model';

export const StudentInputMock: Student = {
  id: '2',
  firstName: 'Ruby',
  firstLastName: 'Mercedes',
  secondLastName: 'Flores',
  userId: '2',
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
