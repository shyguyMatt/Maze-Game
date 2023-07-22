const router = require('express').Router();
const { Map, User, Highscore, Tile} = require('../../models');

// FOR TESTING ONLY, REMOVE BEFORE LAUNCH
router.get('/users', async (req, res) => {
    try {
        const userData = await User.findAll();
        res.json(userData);
    } catch (err) {
        res.json(err)
    }
})

// FOR TESTING ONLY, REMOVE BEFORE LAUNCH
router.get('/currentuser', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)
        res.json(userData)
    } catch (err) {
        res.status(400).json(err)
    }
})

// FOR TESTING ONLY, REMOVE BEFORE LAUNCH
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

// moves tehe user north and returns new tile data
router.post('/goNorth', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)

        // searches the map for current tile
        const tile = await Map.findOne({ 
            where: { id: userData.map },
            include: {model: Tile, where: { x: userData.location_x, y: userData.location_y }}
        })

        // checks if the user can go north
        if (!tile.tiles[0].north) {
            res.json('You cannot go in that direction!');
            return;
        }

        // updating and saving new user location
        userData.location_y++;
        await userData.save();

        //gets new tile data after move
        const newTile = await Map.findOne({
            where: { id: userData.map },
            include: {model: Tile, where: { x: userData.location_x, y: userData.location_y }}
        })

        res.status(200).json(newTile);
        
    } catch (err) {
        res.status(400).json('this is an error');
    }
});

// moves the user east and returns new tile data
router.post('/goEast', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)

        // searches the map for current tile
        const tile = await Map.findOne({ 
            where: { id: userData.map },
            include: {model: Tile, where: { x: userData.location_x, y: userData.location_y }}
        })

        // checks if the user can go east
        // returns if false
        if (!tile.tiles[0].east) {
            res.json({ message: 'You cannot go in that direction!' });
            return;           
        }

        // updating and saving new user location
        userData.location_x++;
        await userData.save();

        // gets new tile data after move
        const newTile = await Map.findOne({
            where: { id: userData.map },
            include: {model: Tile, where: { x: userData.location_x, y: userData.location_y }}
        })

        res.status(200).json(newTile); 

    } catch (err) {
        res.status(400).json(err);
    }
});

// moves the user south and returns new tile data
router.post('/goSouth', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)

        // searches the map for current tile
        const tile = await Map.findOne({ 
            where: { id: userData.map },
            include: {model: Tile, where: { x: userData.location_x, y: userData.location_y }}
        })

        // checks if user can go south
        // returns if false
        if (!tile.tiles[0].south) {
            res.json({ message: 'You cannot go in that direction!' });
            return;           
        }

        // updating and saving new user location
        userData.location_y--;
        await userData.save();

        // gets new tile data after move
        const newTile = await Map.findOne({
            where: { id: userData.map },
            include: {model: Tile, where: { x: userData.location_x, y: userData.location_y }}
        })

        res.status(200).json(newTile); 

    } catch (err) {
        res.status(400).json(err);
    }
});

// moves the user west and returns new tile data
router.post('/goWest', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)

        // searches map for current tile
        const tile = await Map.findOne({ 
            where: { id: userData.map },
            include: {model: Tile, where: { x: userData.location_x, y: userData.location_y }}
        })

        // checks if user can go west
        // returns if false
        if (!tile.tiles[0].west) {
            res.json({ message: 'You cannot go in that direction!' });
            return;            
        }

        // updating and saving new user location
        userData.location_x--;
        await userData.save();

        // gets new tile data after move
        const newTile = await Map.findOne({
            where: { id: userData.map },
            include: {model: Tile, where: { x: userData.location_x, y: userData.location_y }}
        })

        res.status(200).json(newTile);

    } catch (err) {
        res.status(400).json(err);
    }
});

// changes the current user map id and sets them to starting point
router.post('/goToMap/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)
        const mapData = await Map.findByPk(req.params.id)
        
        // updates user entry with starting location and map id
        userData.update(({ location_x: mapData.xstart }))
        userData.update(({ location_y: mapData.ystart }))
        userData.update(({ map: req.params.id }))
        res.status(200).json({ message: 'map updated'})

    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;
