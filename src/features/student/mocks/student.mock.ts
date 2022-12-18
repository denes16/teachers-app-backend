import { Student } from '../../../@generated/student/student.model';

export const StudentMock: Student = {
  id: '1',
  firstName: 'John',
  firstLastName: 'Doe',
  secondLastName: 'Doe',
  phone: '1234567890',
  address: '1234 Main St',
  genre: true,
  birthdate: new Date(),
  comments: 'This is a comment',
  tutorFullName: 'John Doe',
  extraPhone: '1234567890',
  modelName: 'Student',
  createdAt: new Date(),
  updatedAt: new Date(),
};
