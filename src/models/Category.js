module.exports  = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
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
  // Category.associate = (models) => {
  //   Category.belongsToMany(models.BlogPost, {
  //     through: models.PostCategory,
  //     as: 'blogPosts',
  //     foreignKey: 'categoryId',
  //     otherKey: 'postId'
  //   });
//};
  return Category
}
