const express = require('express')
const app = express()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

// const session = require('express-session')
// const models = require('../models')

// シリアライズ処理でidを渡す
// passport.serializeUser((id, done) => {
//   done(null, id)
// })
// passport.deserializeUser((id, done) => {
//   models.users.findByPK(id, (error, user) => {
//     // errorならuser情報を渡さない
//     if (error) {
//       return done(error)
//     }
//     done(null, user)
//   })
// })

app.use(passport.initialize())

passport.use(
  'local-signin',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      console.log(req.body)
      if (email === 'test@test.com' && password === '123456') {
        return done(null, email)
      } else {
        console.log('error')
        return done(null, false, { message: '入力が正しくありません。' })
      }
    }
  )
)

module.exports = {
  passport
}
