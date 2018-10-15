const router = require('express').Router();
const Students = require('../server/db/students');
const Campuses = require('../server/db/campuses');

router.get('/campuses', (req, res, next) => {
    Campuses.findAll()
    .then(campuses => res.json(campuses))
    .catch(next)
})

module.exports = router;
