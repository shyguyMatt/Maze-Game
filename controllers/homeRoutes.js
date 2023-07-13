const router = require('express').Router();

router.get('/test', async (req, res) => {
    res.json('homeroutes test success!')
})

module.exports = router;
