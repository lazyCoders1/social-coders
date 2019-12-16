require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env
const authCtrl = require('./controllers/authCtrl')

const app = express()

app.use(express.json())

app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: SECRET,
        cookie: {secure: false}
    }))

//*******AUTHENTICATION*******//
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)

massive(CONNECTION_STRING).then(database => {
    app.set('db', database)
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
}) 