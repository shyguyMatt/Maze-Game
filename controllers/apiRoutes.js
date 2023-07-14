const router = require('express').Router();

// import databases

router.get('/test', async (req, res) => {
    res.json('api routes test success!')
})

module.exports = router;
