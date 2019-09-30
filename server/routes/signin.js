const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post(
  '/',
  passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/signin',
    session: true
  })
)

module.exports = router
