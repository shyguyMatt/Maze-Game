const User = require('./User');
const Map = require('./Map');
const Highscore = require('./Highscore')
const Tile = require('./Tile')

// Map hasMany Tiles
Map.hasMany(Tile, {
    foreignKey: 'map_id'
})

// Map hasMany Highscores
Map.hasMany(Highscore, {
    foreignKey: 'map_id'
});

// User hasMany Highscores
User.hasMany(Highscore, {
    foreignKey: 'user_id'
})

// Tile hasOne Map
Tile.belongsTo(Map, {
    foreignKey: 'map_id'
})

// Highscore belongsto Map
Highscore.belongsTo(Map, {
    foreignKey: 'map_id'
})

// Highscore belongsto User
Highscore.belongsTo(User,{
    foreignKey: 'user_id'
})

module.exports = { User, Map, Highscore, Tile }
