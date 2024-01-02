const Category = (sequelize, DataTypes) => {
  const model = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
      tableName: 'categories',
      timestamps: false,
      underscored: true,
  })

  return model
}

module.exports = Category;

  