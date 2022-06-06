const session = require('express-session');
const MongoStore = require('connect-mongo');

module.exports = app => {
  app.use(
    session({
      secret:"webmad0820",
      resave: true,
      saveUninitialized: true,
      cookie: {
        // sameSite: 'none',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
      },
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost/server-bigotes'
      })
    })
  );
};