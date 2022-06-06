const router = require("express").Router()
const bcrypt = require("bcrypt")
const transporter = require('../config/nodemailer.config')
const bcryptSalt = 10

const User = require("../models/user.model")

router.post('/signup', (req, res) => {

    const { username, password, email, cif, associationName, imageUrl} = req.body
  
    User
      .findOne({ username })
      .then(user => {
  
        if (user) {
          res.status(400).json({ code: 400, message: 'Username already exixts' })
          return
        }
  
        const salt = bcrypt.genSaltSync(bcryptSalt)
        const hashPass = bcrypt.hashSync(password, salt)
        
        User
          .create({ username, password: hashPass })
          .then(() => res.json({ code: 200, message: 'User created' }))
          .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', err: err.message }))
      })
      .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err: err.message }))
  })
  
  router.post('/login', (req, res) => {
  
    const { username, password } = req.body
  
    User
      .findOne({ username })
      .then(user => {
  
        if (!user) {
          res.status(401).json({ code: 401, message: 'Username not registered' })
          return
        }
  
        if (bcrypt.compareSync(password, user.password) === false) {
          res.status(401).json({ code: 401, message: 'Incorrect password' })
          return
        }
  
        req.session.currentUser = user
        res.json(req.session.currentUser)
      })
      .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err: err.message }))
  })
  
  router.get('/logout', (req, res) => {
    req.session.destroy((err) => res.json({ message: 'Logout successful' }));
  })
  
  router.post("/isloggedin", (req, res) => {
    req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
  })


router.post('/sendEmail', (req, res) => {

    let {
        emailUser,
        emailOwner,
        subject,
        message
    } = req.body

    let mail = {
        from: emailUser,
        to: emailOwner,
        subject: subject,
        text: message,
        html: `<b>${message}</b>`
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            
            res.status(500).send({ status: 'FAIL', msg: 'Internal error: email not sent' })

        } else {
            
            res.status(200).json({ status: 'OK', msg: 'Email sent' })
        }
    })


})



module.exports = router
