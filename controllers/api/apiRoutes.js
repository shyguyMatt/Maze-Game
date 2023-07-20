const router = require('express').Router();
const { Map, User, Highscore, Tile} = require('../../models');

// import databases
router.get('/test', async (req, res) => {
    res.json('api test successful')
})

router.get('/getmaps', async (req, res) => {
    try {
        const mapData = await Map.findAll({
            include: [{model: Tile}, {model: Highscore, include: { model: User, attributes: ['user_name']}}]
        });
        res.json(mapData);
    } catch (err) {
        res.json(err)
    }
});

router.post('/goNorth', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)
        const tile = await Map.findOne({ 
            where: { id: userData.map },
            include: {model: Tile, where: { x: userData.location_x, y: userData.location_y }}
        })
        const newUserLocation = userData.location_y + 1

        userData.update(({ location_y: newUserLocation}))
        res.json(tile);
    } catch (err) {
        res.json(err);
    }
});

router.post('/goEast', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)
        const tile = await Map.findOne({ 
            where: { id: userData.map },
            include: {model: Tile, where: { x: userData.location_x, y: userData.location_y }}
        })
        const newUserLocation = userData.location_x + 1

        userData.update(({ location_x: newUserLocation}))
        res.json(tile);
    } catch (err) {
        res.json(err);
    }
});

router.post('/goSouth', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)
        const tile = await Map.findOne({ 
            where: { id: userData.map },
            include: {model: Tile, where: { x: userData.location_x, y: userData.location_y }}
        })
        const newUserLocation = userData.location_y - 1

        userData.update(({ location_y: newUserLocation}))
        res.json(tile);
    } catch (err) {
        res.json(err);
    }
});

router.post('/goWest', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)
        const tile = await Map.findOne({ 
            where: { id: userData.map },
            include: {model: Tile, where: { x: userData.location_x, y: userData.location_y }}
        })
        const newUserLocation = userData.location_x - 1

        userData.update(({ location_x: newUserLocation}))
        res.json(tile);
    } catch (err) {
        res.json(err);
    }
});

router.post('/goToMap/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)
        
        userData.update(({ location_x: 1 }))
        userData.update(({ location_y: 1 }))
        userData.update(({ map: req.params.id }))
        res.json(userData)
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;
