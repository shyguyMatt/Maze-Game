const router = require('express').Router();
const { Map, User, Highscore} = require('../../models')

// import databases

router.get('/test', async (req, res) => {
    res.json('api routes test success!')
});

router.post('/goNorth/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id)
        const newUserLocation = userData.location_y + 1

        userData.update(({ location_y: newUserLocation}))
        res.json(userData);
    } catch (err) {
        res.json(err);
    }
});

router.post('/goEast/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id)
        const newUserLocation = userData.location_x + 1

        userData.update(({ location_x: newUserLocation}))
        res.json(userData);
    } catch (err) {
        res.json(err);
    }
});

router.post('/goSouth/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id)
        const newUserLocation = userData.location_y - 1

        userData.update(({ location_y: newUserLocation}))
        res.json(userData);
    } catch (err) {
        res.json(err);
    }
});

router.post('/goWest/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id)
        const newUserLocation = userData.location_x - 1

        userData.update(({ location_x: newUserLocation}))
        res.json(userData);
    } catch (err) {
        res.json(err);
    }
});

router.get('/getUsers', async (req, res) => {
    const userData = await User.findAll()
    res.json(userData)
})

module.exports = router;
