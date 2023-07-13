const express = require('express');
const routes = require('./controllers');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;



// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on:' + PORT + '!' )); 
});
