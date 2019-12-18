import React, { Component } from 'react';
import axios from 'axios'
import './profile.scss'
import EditProfile from './EditProfile';
import {MDBIcon} from 'mdbreact'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            toggle: false
        }
    }

    componentDidMount = () => {
        this.getUsersPosts()
    }

    getUsersPosts = async () => {
        const res = await axios.get(`/api/user/posts/3`)
        console.log(res.data)
        this.setState({
            posts: res.data
        })
    }

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    
    render() {
        const usersPosts = this.state.posts.map((el, i) => {
            return <div className='user-post-container' key={el.id}>
                    <h1 className='h1'>{el.title}</h1>
                    <img className='img' src={el.img} alt='article image'/>
                    <p className='p'>{el.content}</p>
                </div>
        }) 
        return (
            <div>
                <div className='top-padding'/>
                <div className='user-profile-container'>
                    <div className='cover-photo'></div>
                    <div className='profile-pic'>
                        <img src='https://robohash.org/chody' alt='robot'/>
                        </div> 
                        <div className="header-container">
                            <div className="name-container">
                            	<h3>Users Name</h3>
                            	<h4>This is the sub header</h4>
                            </div>
                            <div className="about-container">
                                <div className='about'>A brief description about me. lorem ipsum yada yada la di da.</div>
                                <div className='address'>Salt Lake City, UT</div>
                            </div>
                        </div>
                            <div className="edit">
                                <MDBIcon icon="pen" onClick={()=> this.toggle()} className='edit-pen'/>
                            </div>
                </div>
                {usersPosts}
                {this.state.toggle ? <EditProfile toggle={this.toggle}/> : null}
            </div>
        );
    }
}

export default Profile;