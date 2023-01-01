import { Genre } from '@prisma/client';
import { Student } from '../../../@generated/student/student.model';
import { CreateOneStudentArgs } from '../../../@generated/student/create-one-student.args';

export const StudentInputMock: CreateOneStudentArgs = {
  data: {
    id: '2',
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
    userId: "1"
  },
};
