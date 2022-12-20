import { Student } from '../../../@generated/student/student.model';

export const StudentInputMock: Student = {
  id: '2',
  firstName: 'Ruby',
  firstLastName: 'Mercedes',
  secondLastName: 'Flores',
  phone: '1234567890',
  address: '1234 Av',
  genre: true,
  birthdate: new Date(),
  comments: 'This is not a comment',
  tutorFullName: 'John Doe',
  extraPhone: '1234567890',
  modelName: 'Student',
  createdAt: new Date(),
  updatedAt: new Date(),
};
