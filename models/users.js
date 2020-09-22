const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    email: {
      type: DataTypes.STRING(145),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email",
      unique: "email_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(145),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "password"
    },
    first_name: {
      type: DataTypes.STRING(145),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "first_name"
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "last_name"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created_at"
    },
    modified_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "modified_at"
    },
    id_google_user: {
      type: DataTypes.STRING(245),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_google_user"
    },
    profile_pic: {
      type: DataTypes.STRING(245),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "profile_pic"
    },
    phone_number: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "phone_number"
    },
    about_me: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "about_me"
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "1",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "status"
    },
    id_facebook_user: {
      type: DataTypes.STRING(145),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_facebook_user"
    }
  };
  const options = {
    tableName: "users",
    comment: "",
    indexes: []
  };
  const UsersModel = sequelize.define("users_model", attributes, options);
  return UsersModel;
};