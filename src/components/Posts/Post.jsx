import React, { Component } from 'react';
import { MDBIcon } from "mdbreact";
import './post.scss'

class Post extends Component {
    render() {
        return (
            <div className='post-card'>
                <img
              style={{
                backgroundImage: `url('https://www.aerobell.com/wp-content/uploads/profile2.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
               top: '10px',
               left: '10px'
              }}
            />
               <h2 className='users-name'>Jon Smith</h2> 
               <h4 className='time'>12 hrs</h4>
               <div className='post-content'>post content about whatever Jon smith wants to post about his sad, pathetic, boring life. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/><br/> Aliquam similique molestiae delectus esse, ut veniam ratione molestias maiores dolore minima quia ipsam impedit dicta, iure sapiente quisquam illo saepe enim!</div>
               {/* <img className='post-picture' src='https://www.aerobell.com/wp-content/uploads/profile2.jpg' alt='post picture' /> */}
               <h5 className='likes'>43 likes</h5>
               <div className="icons">
                   <div className="icon-box">
                       <i className="fas fa-heart"></i>
                       <MDBIcon far icon="comment-alt"/>
                       <MDBIcon icon="share"/>
                   </div>
                   <i className="fas fa-star"></i>
               </div>
            </div>
        );
    }
}

export default Post;