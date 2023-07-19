const router = require('express').Router();
const { Map, User, Highscore, Tile} = require('../../models');

// import databases
router.get('/test', async (req, res) => {
    res.json('api test successful')
})

router.get('/getmaps', async (req, res) => {
    try {
        const mapData = await Map.findAll({
            include: [{model: Tile}]
        });
        res.json(mapData);
    } catch (err) {
        res.json(err)
    }
});

router.post('/goNorth/', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)
        const newUserLocation = userData.location_y + 1

        userData.update(({ location_y: newUserLocation}))
        res.json(userData);
    } catch (err) {
        res.json(err);
    }
});

router.post('/goEast/', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)
        const newUserLocation = userData.location_x + 1

        userData.update(({ location_x: newUserLocation}))
        res.json(userData);
    } catch (err) {
        res.json(err);
    }
});

router.post('/goSouth/', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)
        const newUserLocation = userData.location_y - 1

        userData.update(({ location_y: newUserLocation}))
        res.json(userData);
    } catch (err) {
        res.json(err);
    }
});

router.post('/goWest/', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)
        const newUserLocation = userData.location_x - 1

        userData.update(({ location_x: newUserLocation}))
        res.json(userData);
    } catch (err) {
        res.json(err);
    }
});

router.get('/user', async (req, res) => {
    const userData = await User.findByPk(req.session.user_id)
    res.json(userData);
});

module.exports = router;
