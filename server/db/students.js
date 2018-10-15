const Sequelize = require('sequelize');
const db = require('../db');

const Students = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: ""
    },
    gpa: {
        type: Sequelize.FLOAT(0, 4.0),
    }
});

module.exports = Students;