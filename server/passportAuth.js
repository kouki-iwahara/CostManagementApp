const express = require('express')
const app = express()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const models = require('./models')

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
      // 入力されたメールからuser情報を取得
      models.user.findOne({ where: { email } }).then((user) => {
        console.log(user)
        // userが取得できない
        if (!user) {
          return done(null, false, { message: 'emailが正しくありません' })
        }
        // passwordが一致しない
        if (user.password !== password) {
          return done(null, false, { message: 'passwordが正しくありません' })
        }
        // どちらも一致
        return done(null, user)
      })
    }
  )
)

module.exports = {
  passport
}
