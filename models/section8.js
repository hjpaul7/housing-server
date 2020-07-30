module.exports = (sequelize, DataTypes) => {
  const Section8 = sequelize.define("section8", {
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
    unemploymentVoucher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Section8;
};
