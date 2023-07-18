const router = require('express').Router();

router.get('/test', async (req, res) => {
    res.json('homeroutes test success!')
})

router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('login');
  });

module.exports = router;
