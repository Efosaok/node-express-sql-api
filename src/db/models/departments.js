'use strict';
module.exports = (sequelize, DataTypes) => {
  var departments = sequelize.define('departments', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  departments.associate = function(models) {
    // associations can be defined here
  };
  return departments;
};
