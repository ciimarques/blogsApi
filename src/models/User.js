const User = (sequelize, DataTypes) => {
  const model = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
    }, 
  }, {
      tableName: 'users',
      timestamps: false,
      underscored: true,
  })
  model.associate = (models) => {
    model.hasMany(models.BlogPost, {
      foreignKey: 'user_id',
      as: 'blogPosts',
    });
  };
  return model
}

module.exports = User;