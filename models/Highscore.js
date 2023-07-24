const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Highscore extends Model {}

Highscore.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        score: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        map_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'map',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: false,
        underscored: true,
        modelName: 'highscore'
    }
)

module.exports = Highscore;
