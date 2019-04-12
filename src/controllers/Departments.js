import models from '../db/models';

const { departments } = models;

class Departments {
  static async createDepartment({ body }, res) {
    try {
      const newDepartment = await departments.create(body);
      return res.status(200).json({
        message: 'department successfully created',
        newDepartment,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'error occured',
        error: error.message,
      });
    }
  }
}

export default Departments;
