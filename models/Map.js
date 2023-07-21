const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Map extends Model {}

Map.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
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

module.exports = Map;
