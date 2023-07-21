const sequelize = require("../config/connection");
const { User, Highscore, Map } = require("../models");

const userData = require("../seeds/userData.json");
const highScoreData = require("../seeds/highScoreData.json");
const mapData = require("../seeds/mapData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const highScore of highScoreData) {
    await Highscore.create({
      ...highScore,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const { id } of mapData) {
    const maps = await Map.create({
      reader_id: id,
    });
  }

  process.exit(0);
};

seedDatabase();
