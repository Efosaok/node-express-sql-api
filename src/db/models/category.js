'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(
    'category',
    {
      department_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'departments',
          key: 'id',
        },
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  category.associate = (models) => {
    category.belongsTo(models.departments, { foreignKey: 'department_id' });
  };
  return category;
};
