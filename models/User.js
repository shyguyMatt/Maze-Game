const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        location_x: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        location_y: {
            type: DataTypes.INTEGER,
            allownull: true,
        },
        // score_id: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     references: {
        //         model: 'highscore',
        //         key: 'id',
        //     }
        // },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: false,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = User;
