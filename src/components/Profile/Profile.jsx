import React, { Component } from 'react';
import axios from 'axios'
import './profile.scss'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
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
                                <div>about</div>
                                <div>address</div>
                            </div>
                        </div>
                </div>
                {usersPosts}
            </div>
        );
    }
}

export default Profile;