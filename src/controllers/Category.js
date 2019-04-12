import models from '../db/models';

const { category, departments } = models;

class Category {
  static async createCategory({ body, query: { department_id } }, res) { // eslint-disable-line
    try {
      const newCategory = await category.create({ department_id, ...body });
      return res.status(201).json({
        message: 'category successfully created',
        newCategory,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'error occured',
        error: error.message,
      });
    }
  }

  static async fetchCategory({ params: { id } }, res) {
    try {
      const singleCategory = await category.findOne({
        where: { id },
        include: [
          {
            model: departments,
          },
        ],
      });
      if (!singleCategory) {
        return res.status(404).send({
          message: 'category not found',
        });
      }
      return res.status(200).json({
        message: 'category fetched',
        singleCategory,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'error occured',
        error: error.message,
      });
    }
  }
}

export default Category;
