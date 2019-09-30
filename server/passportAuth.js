const express = require('express')
const app = express()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const models = require('./models')

// シリアライズ処理でidを渡す
passport.serializeUser((userId, done) => {
  console.log('serializeUser')
  done(null, userId)
})
passport.deserializeUser((userId, done) => {
  console.log('deserializeUser')
  // user情報を渡す
  models.user
    .findOne({ where: { userId } })
    .then((user) => {
      done(null, user)
      console.log(user)
    })
    .catch((error) => {
      done(error.message, null)
    })
})
// passport初期化
app.use(passport.initialize())
// emailとpasswordでsignin処理
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
      // 入力されたメールからuser情報を取得
      models.user
        .findOne({ where: { email } })
        .then((user) => {
          console.log(user)
          // userが取得できない場合
          if (!user) {
            return done(null, false, { message: 'emailが正しくありません' })
          }
          // passwordが一致しない場合
          if (user.password !== password) {
            return done(null, false, { message: 'passwordが正しくありません' })
          }
          // どちらも一致
          return done(null, user.userId)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  )
)

module.exports = {
  passport
}
