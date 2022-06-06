module.exports = app => {
    
  // Base URLS
    app.use('/api', require('./cats.routes.js'))
    app.use('/api', require("./auth.routes"));
    app.use('/api', require('./users.routes.js'))
    app.use('/api/files', require('./files.routes'))
}
