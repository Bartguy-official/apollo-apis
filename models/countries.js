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
    sortname: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "sortname",
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name",
    },
    phonecode: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "phonecode",
    },
  };
  const options = {
    tableName: "countries",
    comment: "",
    indexes: [],
    timestamps: false,
  };
  const CountriesModel = sequelize.define(
    "countries_model",
    attributes,
    options
  );
  return CountriesModel;
};
