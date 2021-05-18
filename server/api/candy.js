//This will hold all the candy routes bc if I add new models,
//I want to make sure they're all separate
//default exports are the entirety of the export, so no curly braces,
//if you put curly braces it would be asking for router.router

const router = require('express').Router();
//"unpack" candy from the module exports object
const { Candy } = require('../db/')

router.get('/', async (req, res, next) => {
  try {
    const allCandy = await Candy.findAll();
    res.json(allCandy)
    //res.json sends json, res.send expects HTML
  } catch (err) {
    next(err)
  }
})

module.exports = router

