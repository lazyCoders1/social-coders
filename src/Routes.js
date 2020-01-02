import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Channels from './components/Channels/Channel'
import MeetUpsDash from './components/Meetups/MeetUpsDash'
import CreatePost from './components/Posts/CreatePost'
import Profile from './components/Profile/Profile'
import Favorites from './components/Profile/Favorites'
import AboutUs from './components/AboutUs/AboutUs'
import Login from './components/Authentication/Login'
import Register from './components/Authentication/Register'
import JavaScript from './components/JavaScript/JavaScript'
import CSS from './components/CSS/CSS'
import Other from './components/Other/Other'
import Post from './components/Posts/Post'
import PostDetails from './components/Posts/PostDetails'
import Landing from './components/Dashboard/Landing'
import MeetUpDetails from './components/Meetups/MeetUpDetails'
import TheDevs from './components/AboutUs/TheDevs'

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/channels" component={Channels}></Route>
    <Route path="/meetups" component={MeetUpsDash}></Route>
    <Route path="/meetup_details/:id" component={MeetUpDetails}></Route>
    <Route path="/createpost" component={CreatePost}></Route>
    <Route path="/post_details/:id" component={PostDetails}></Route>
    <Route path="/profile/:id" component={Profile}></Route>
    <Route path="/favorites" component={Favorites}></Route>
    <Route path="/aboutus" component={AboutUs}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/javascript" component={JavaScript}></Route>
    <Route path="/css" component={CSS}></Route>
    <Route path="/other" component={Other}></Route>
    <Route path="/post" component={Post} />
    <Route path="/us" component={TheDevs} />
  </Switch>
)
