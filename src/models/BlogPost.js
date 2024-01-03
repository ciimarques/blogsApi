const BlogPost = (sequelize, DataTypes) => {
  const model = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users', 
        key: 'id',       
      },
    },
    image: {
      type: DataTypes.STRING,
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true,
})
model.associate = (models) => {
  model.belongsTo(models.User, {
    foreignKey: 'user_id',
    as: 'user', 
  });
};
return model
}

module.exports = BlogPost;