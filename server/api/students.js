const router = require('express').Router();
const Students = require('../server/db/students');
const Campuses = require('../server/db/campuses');

router.get('/', (req, res, next) => {
    Students.findAll()
    .then(students => res.json(students))
    .catch(next)
})

module.exports = router;
