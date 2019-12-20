require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env

// Controllers
const authCtrl = require('./controllers/authCtrl')
const postCtrl = require('./controllers/postController')
const commentCtrl = require('./controllers/commentController')
const profileCtrl = require('./controllers/profileCtrl')
const meetCtrl = require('./controllers/meetUpsController')

// Middleware
const auth = require('./middleware/authMiddleware')

const app = express()

app.use(express.json())

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: SECRET,
    cookie: { secure: false }
  })
)

// Auth Endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)

//Meet Up Endpoints
app.get('/api/google/location', meetCtrl.getLocation)
app.post('/api/meetups', meetCtrl.addMeetUp)
app.delete('/api/meetups', meetCtrl.deleteMeetup)
app.get('/api/meetups', meetCtrl.getMeetups)

// Comment Endpoints
app.get('/api/comments/:id', commentCtrl.getComments)
app.post('/api/comments', /* auth.usersOnly, */ commentCtrl.addComment)
app.delete('/api/comments/:id', commentCtrl.deleteComment)
app.patch('/api/comments/:id', commentCtrl.updateComment)

// Post Endpoints
app.get('/api/posts/:category', postCtrl.getPosts)
app.get('/api/posts/:id', postCtrl.getOnePost)
app.get('/api/user/posts/:id', postCtrl.getUsersPosts)
app.post('/api/posts', /* auth.usersOnly, */ postCtrl.addPost)
app.delete('/api/posts/:id', postCtrl.deletePost)
app.patch('/api/posts/:id', postCtrl.updatePost)

// Comment Endpoints
app.get('/api/comments/:id', commentCtrl.getComments)
app.post('/api/comments', auth.usersOnly, commentCtrl.addComment)
app.delete('/api/comments/:id', commentCtrl.deleteComment)
app.patch('/api/comments/:id', commentCtrl.updateComment)

//Profile Endpoints
app.get('/api/profile/:id', profileCtrl.getProfile)
app.put('/api/profile/:id', profileCtrl.updateProfile)

massive(CONNECTION_STRING).then(database => {
  app.set('db', database)
  app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})
