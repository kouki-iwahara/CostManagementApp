const express = require('express')
const router = express.Router()
const passport = require('passport')
// const signinController = require('../controllers/signinController')

router.post(
  '/',
  passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/signin',
    session: false
  })
)

module.exports = router
