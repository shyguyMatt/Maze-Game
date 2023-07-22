const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const hbs = require('express-handlebars').create({});

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'verysecretstring',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// joins the path to public making it the root for the server
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on:' + PORT + '!' )); 
});
