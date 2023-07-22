const router = require('express').Router();
const Highscore = require('../models/Highscore');
const Map = require('../models/Map');
const User = require('../models/User');

// Send the rendered Handlebars.js template back as the response
router.get('/', async (req, res) => {
    res.render('login');
  });

// Send the rendered signup.handlebars template back as the response
router.get('/signup', async (req, res) => {
  res.render('signup')
});

// Send the highscores for specific map id
router.get('/highscores/:id', async (req, res) => {
  try {
    // find map by its id
    // include highscores along with their owners
    const scoreData = await Map.findOne({ 
      where: { id: req.params.id },
      include: {model: Highscore, include: { model: User, attributes: ['user_name']}}
    })

    // map highscores and send them to highscores.handlebars template
    const highscores = scoreData.map((score) => score.get({plain: true}));
    res.render('highscores', { highscores })  

  } catch (err) {
    res.json(err);
  }

});

// Send the rendered Handlebars.js template back as the response
router.get('/roomOne', async (req, res) => { 
  res.render('roomOne');
});


module.exports = router;
