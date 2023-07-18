const sequelize = require('../config/connection');
const { User, Map, Tile, Highscore } = require('../models');

const userData = require('../seeds/userData.json');
const mapData = require('../seeds/mapData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Map.bulkCreate(mapData, {
    individualHooks: true,
    returning: true,
  });

  await Tile.bulkCreate(tileData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
