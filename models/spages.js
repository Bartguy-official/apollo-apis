const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id",
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "title",
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description",
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "1",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "status",
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created_at",
    },
    meta_data: {
      type: DataTypes.STRING(245),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "meta_data",
    },
  };
  const options = {
    tableName: "spages",
    comment: "",
    indexes: [],
    timestamps: false,
  };
  const SpagesModel = sequelize.define("spages_model", attributes, options);
  return SpagesModel;
};
