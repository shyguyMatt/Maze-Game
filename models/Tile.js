const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tile extends Model {}

Tile.init(
    {
        map_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'map',
                key: 'id',
            },
        },
        x: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        y: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        north: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        east: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        south: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        west: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'map'
    }
)

module.exports = Tile;
