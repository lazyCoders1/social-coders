import React from "react";
import { Switch, Route } from "react-router-dom";
import Channels from "./components/Channels/Channel";
import Chat from "./components/Chat/Chat";
import Dashboard from "./components/Dashboard/Dashboard";
import MeetUpsDash from "./components/Meetups/MeetUpsDash";
import CreatePost from "./components/Posts/CreatePost";
// import UserPost from "./components/Posts/UserPost";
import Profile from "./components/Profile/Profile";
import Favorites from "./components/Profile/Favorites";
import Startups from "./components/Startups/StartUps";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import JavaScript from "./components/JavaScript/JavaScript";
import CSS from "./components/CSS/CSS";
import Public from "./components/Public/Public";
import Post from "./components/Posts/Post";
import PostDetails from './components/Posts/PostDetails'
import Landing from './components/Dashboard/Landing';

export default (
  <Switch>
    <Route exact path= "/" component={Landing}/>
    <Route path="/dashboard" component={Dashboard}></Route>
    <Route path="/channels" component={Channels}></Route>
    <Route path="/chat" component={Chat}></Route>
    <Route path="/meetups" component={MeetUpsDash}></Route>
    <Route path="/createpost" component={CreatePost}></Route>
    <Route path="/post_details/:id" component={PostDetails}></Route>
    <Route path="/profile/:id" component={Profile}></Route>
    <Route path="/favorites" component={Favorites}></Route>
    <Route path="/startups" component={Startups}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/javascript" component={JavaScript}></Route>
    <Route path="/css" component={CSS}></Route>
    <Route path="/public" component={Public}></Route>
    <Route path="/post" component={Post} />
  </Switch>
);
