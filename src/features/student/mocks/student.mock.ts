import { Student } from '../../../@generated/student/student.model';
import { Genre } from '../../../@generated/prisma/genre.enum';

export const StudentMock: Student = {
  id: '1',
  firstName: 'John',
  firstLastName: 'Doe',
  secondLastName: 'Doe',
  phone: '1234567890',
  address: '1234 Main St',
  genre: Genre.MALE,
  birthDate: new Date(),
  comments: 'This is a comment',
  tutorFullName: 'John Doe',
  extraPhone: '1234567890',
  modelName: 'Student',
  userId: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: "1"
};
