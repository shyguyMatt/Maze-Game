const sequelize = require('../config/connection');

const { User, Highscore, Map } = require('../models');

const userData = require('../seeds/userData.json');
const highScoreData = require('../seeds/highScoreData.json');
const mapData = require('../seeds/mapData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

