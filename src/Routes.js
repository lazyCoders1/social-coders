import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Channels from './components/Channels/Channel'
import Chat from './components/Chat/Chat'
import Dashboard from './components/Dashboard/Dashboard'
import Meetups from './components/Meetups/MeetUps'
import CreatePost from './components/Posts/CreatePost'
import UserPost from './components/Posts/UserPost'
import Profile from './components/Profile/Profile'
import Favorites from './components/Profile/Favorites'
import Startups from './components/Startups/StartUps'
import Login from './components/Authentication/Login'
import Register from './components/Authentication/Register'

export default (
  <Switch>
    <Route exact path="/" component={Dashboard}></Route>
    <Route path="/channels" component={Channels}></Route>
    <Route path="/chat" component={Chat}></Route>
    <Route path="/meetups" component={Meetups}></Route>
    <Route path="/createpost" component={CreatePost}></Route>
    <Route path="/userposts" component={UserPost}></Route>
    <Route path="/profile/:id" component={Profile}></Route>
    <Route path="/favorites" component={Favorites}></Route>
    <Route path="/startups" component={Startups}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/register" component={Register}></Route>
  </Switch>
)
