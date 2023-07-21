const router = require('express').Router();
const Highscore = require('../models/Highscore');
const Map = require('../models/Map');
const User = require('../models/User');

router.get('/test', async (req, res) => {
    res.json('homeroutes test success!')
})

router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('login');
  });

router.get('/signup', async (req, res) => {
  // Send the rendered signup.handlebars template back as the response
  res.render('signup')
});

router.get('/highscores/:id', async (req, res) => {
  // Send the highscores for specific map id
  try {
    const scoreData = await Map.findOne({ 
      where: { id: req.params.id },
      include: {model: Highscore, include: { model: User, attributes: ['user_name']}}
    })

    const highscores = scoreData.map((score) => score.get({plain: true}));
    res.render('highscores', { highscores })  
  } catch (err) {
    res.json(err);
  }

});

  router.get('/roomOne', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('roomOne');
  });


module.exports = router;
