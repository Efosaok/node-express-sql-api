import Departments from '../controllers/Departments';

const { createDepartment } = Departments;

export default (app) => {
  app.post('/api/v1/department', createDepartment);
};
