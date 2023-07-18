const User = require('./User');
const Map = require('./Map');
const Highscore = require('./Highscore')
const Tile = require('./Tile')

// Map hasMany Tiles
Map.hasMany(Tile, {
    foreignKey: 'map_id'
})

// Tile hasOne Map
Tile.belongsTo(Map, {
    foreignKey: 'map_id'
})

// // Highscore belongsTo User
// Highscore.belongsTo(User, {
//     foreignKey: 'user_id'
// })

// // User hasMany Highscores
// User.hasMany(Highscore, {
//     foreignKey: 'score_id',
//     onDelete: 'CASCADE',
// })

module.exports = { User, Map, Highscore }
