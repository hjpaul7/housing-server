module.exports = (sequelize, DataTypes) => {
  const Section42 = sequelize.define("section42", {
    nameOfHousing: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bedrooms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unemployment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Section42;
};
