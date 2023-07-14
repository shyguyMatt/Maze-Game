const User = require('./User');
const Map = require('./Map');
const Highscore = require('./Highscore')

// Highscore belongsTo User
Highscore.belongsTo(User, {
    foreignkey: 'user_id'
})

// User hasMany Highscores
User.hasMany(Highscore, {
    foreignkey: 'score_id',
    onDelete: 'CASCADE',
})

module.exports = { User, Map, Highscore }
