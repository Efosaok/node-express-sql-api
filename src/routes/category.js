import Category from '../controllers/Category';

const { createCategory, fetchCategory } = Category;

export default (app) => {
  app.post('/api/v1/category', createCategory);
  app.get('/api/v1/category/:id', fetchCategory);
};
