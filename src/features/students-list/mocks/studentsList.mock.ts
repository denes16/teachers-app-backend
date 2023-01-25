import { StudentsList, Student } from '@prisma/client';

export const StudentsListMock: StudentsList = {
  id: '1',
  name: 'Students List 1',
  comments: 'This is a comment',
  createdAt: new Date(),
  updatedAt: new Date(),
  modelName: 'StudentsList',
  userId: '1',
  studentIds: [],
};
