'use strict'

const router = require('express').Router()
const { Campus } = require('../db');
const { Student } = require('../db');

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

router.get('/campuses', async (req, res, next) => {
    try {
    const campuses = await Campus.findAll();
    res.json(campuses);
    } catch (error) {
        next(error)
    }
})

router.get('/campuses/:campusId', async (req, res, next) => {
    try {
    const campus = await Campus.findById(req.params.campusId, {
      include: [Student]
    })
    res.json(campus);
    } catch (error) {
        next(error);
    }
});


router.get('/students', async (req, res, next) => {
    try {
      const students = await Student.findAll();
      res.json(students);
    } catch (error) {
        next(error)
    }
})

router.get('/students/:studentId', async (req, res, next) => {
    try {
      const student = await Student.findById(req.params.studentId, {
        include: [Campus]
      })
      res.json(student);
    } catch (error) {
        next(error);
    }
});

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!
router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
