// import React, { Component } from "react";
// import { connect } from "react-redux";
// import {
//   updateComment,
//   updatePostInput,
//   updatePostTitle,
//   updateUserInfo,
//   clearState
// } from "../../Reduxs/reducer";
// // import axios from "axios";
// // import { Link } from "react-router-dom"
// import {
//   MDBRow,
//   MDBCol,
//   MDBBtn,
//   MDBView,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardFooter,
//   MDBIcon,
//   MDBInput
// } from "mdbreact";
// import "./PostDetails.scss";
// // import Comment from "../Comments/Comment";

// export class PostDetails extends Component {
//   constructor() {
//     super();
//     this.state = {
//       post: {},
//       comments: [],
//       isEditing: false,
//       value: 0
//       // profile_img
//     };
//   }

//   render() {
//     const { updateComment, updatePostInput, updatePostTitle } = this.props;
//     const { isEditing } = this.state;
//     return (
//       <div id="post-details">
//         <MDBView className="postContainer">
//           <MDBContainer>
//             <MDBRow>
//               <MDBCol>
//                 <MDBCard className="post-details-card shadow-box-example">
//                   {/* <Link className="btn stretched-link" to={`/postdetails/${this.props.el.post_id}`}> */}
//                   {!isEditing ? (
//                     <MDBCardBody>
//                       <MDBCardTitle tag="h5">
//                         {this.state.post.title}
//                         <h3>What is Javascript?</h3>
//                         {/* {console.log("hit", this.state.post)} */}
//                       </MDBCardTitle>

//                       <MDBCardText className="card-text">
//                         {this.state.post.content}
//                         <p>
//                           Lorem ipsum dolor amet leggings fashion axe skateboard
//                           meditation. Chia cornhole kombucha small batch fam
//                           affogato vape kale chips marfa pok pok raclette
//                           meditation everyday carry readymade. Wolf tofu
//                           pitchfork vinyl mumblecore glossier hoodie sriracha
//                           ethical. Flannel pitchfork ennui disrupt, selvage
//                           photo booth glossier green juice chartreuse 3 wolf
//                           moon kogi. Ramps retro humblebrag listicle flexitarian
//                           sustainable gastropub.Lorem ipsum dolor amet leggings
//                           fashion axe skateboard meditation. Chia cornhole
//                           kombucha small batch fam affogato vape kale chips
//                           marfa pok pok raclette meditation everyday carry
//                           readymade. Wolf tofu pitchfork vinyl mumblecore
//                           glossier hoodie sriracha ethical. Flannel pitchfork
//                           ennui disrupt, selvage photo booth glossier green
//                           juice chartreuse 3 wolf moon kogi. Ramps retro
//                           humblebrag listicle flexitarian sustainable
//                           gastropub.Lorem ipsum dolor amet leggings fashion axe
//                           skateboard meditation. Chia cornhole kombucha small
//                           batch fam affogato vape kale chips marfa pok pok
//                           raclette meditation everyday carry readymade. Wolf
//                           tofu pitchfork vinyl mumblecore glossier hoodie
//                           sriracha ethical. Flannel pitchfork ennui disrupt,
//                           selvage photo booth glossier green juice chartreuse 3
//                           wolf moon kogi. Ramps retro humblebrag listicle
//                           flexitarian sustainable gastropub. PBR&B lo-fi vape
//                           tumeric man braid, snackwave gentrify. Vice gochujang
//                           swag copper mug art party. Intelligentsia sustainable
//                           XOXO lumbersexual YOLO, tbh master cleanse cliche
//                           drinking vinegar vegan snackwave occupy VHS man braid.
//                           Vexillologist 90's chillwave heirloom kitsch direct
//                           trade, vinyl flannel franzen chia occupy listicle.
//                           90's pok pok street art raclette listicle semiotics
//                           banjo hella farm-to-table affogato chia VHS. Schlitz
//                           poke chambray cardigan. Readymade normcore deep v,
//                           tumblr food truck offal edison bulb letterpress. Ennui
//                           tofu occupy af polaroid live-edge blog. Kombucha
//                           heirloom ennui, synth neutra farm-to-table craft beer
//                           hexagon kickstarter jean shorts twee offal palo santo
//                           kogi authentic. Shabby chic yr biodiesel pitchfork.
//                           Fashion axe master cleanse edison bulb paleo. Shabby
//                           chic fixie tumeric, activated charcoal blog DIY seitan
//                           authentic art party bushwick church-key thundercats.
//                           Chicharrones blue bottle affogato pug tbh beard,
//                           pitchfork swag tousled 90's gastropub meh banjo kitsch
//                           forage. Master cleanse pickled drinking vinegar
//                           asymmetrical. Sustainable gentrify glossier squid 3
//                           wolf moon chillwave you probably haven't heard of them
//                           kale chips chambray tattooed. Kickstarter thundercats
//                           stumptown truffaut, semiotics shabby chic drinking
//                           vinegar retro XOXO VHS bushwick.
//                         </p>
//                       </MDBCardText>
//                     </MDBCardBody>
//                   ) : (
//                     <MDBCardBody>
//                       <MDBCardTitle tag="h5">
//                         <input
//                           type="text"
//                           id="example3"
//                           className="edit-title form-control form-control-sm"
//                           placeholder="Title"
//                           value={this.props.createTitle}
//                           name="title"
//                           onChange={e => updatePostTitle(e.target.value)}
//                         />
//                         <MDBInput
//                           className="edit-content"
//                           // iconClass="white-text"
//                           // icon="pencil-alt"
//                           type="textarea"
//                           label="Editing Post?"
//                           outline
//                           value={this.props.createInput}
//                           name="input"
//                           onChange={e => updatePostInput(e.target.value)}
//                         ></MDBInput>
//                         {/* {console.log("hit", this.state.post)} */}
//                       </MDBCardTitle>
//                       <MDBBtn
//                         onClick={() => this.editPost()}
//                         color="default"
//                         className="post-btn"
//                         size="sm"
//                       >
//                         Edit Post
//                       </MDBBtn>
//                       <MDBBtn
//                         onClick={() =>
//                           this.setState({
//                             isEditing: false
//                           })
//                         }
//                         color="default"
//                         className="cancel"
//                         size="sm"
//                       >
//                         Cancel
//                       </MDBBtn>

//                       <MDBBtn
//                         onClick={() => {
//                           this.deletePost();
//                           this.setState({
//                             isEditing: false
//                           });
//                         }}
//                         outline
//                         color="danger"
//                         className="delete"
//                         size="sm"
//                       >
//                         Delete Post
//                       </MDBBtn>
//                     </MDBCardBody>
//                   )}

//                   {/*! COMMENTS */}

//                   <MDBCardFooter className="footer-bar">
//                     <div className="def-number-input number-input">
//                       <button onClick={this.increase}>
//                         <MDBIcon icon="arrow-alt-circle-up" />
//                       </button>
//                       <br />
//                       {/* <input
//                         className="quantity"
//                         name="quantity"
//                         value={this.state.value}
//                         onChange={() => console.log("change")}
//                         type="number"
//                       /> */}
//                       <br />
//                       <button onClick={this.decrease}>
//                         <MDBIcon icon="arrow-alt-circle-down" />
//                       </button>
//                     </div>

//                     <i className="fas fa-share"> Share</i>

//                     <i className="fas fa-bookmark"> Save</i>
//                     <button
//                       className="edit-btn"
//                       onClick={() => {
//                         console.log(this.state.post);
//                         updatePostInput(this.state.post.content);
//                         updatePostTitle(this.state.post.title);
//                         this.setState({
//                           isEditing: true
//                         });
//                       }}
//                     >
//                       <MDBIcon icon="edit" />
//                       Edit
//                     </button>
//                   </MDBCardFooter>

//                   {/* COMMENT INPUT FIELD */}

//                   <MDBCardBody>
//                     <hr />
//                     <p>Comment as Roundy</p>
//                     <div className="input-group">
//                       <div className="input-group-prepend">
//                         <span className="input-group-text" id="basic-addon">
//                           <i className="fas fa-pencil-alt prefix"></i>
//                         </span>
//                       </div>
//                       <textarea
//                         className="form-control"
//                         id="exampleFormControlTextarea1"
//                         rows="3"
//                         placeholder="Whats are your thoughts?"
//                         value={this.props.createComment}
//                         name="input"
//                         onChange={e => updateComment(e.target.value)}
//                       ></textarea>
//                     </div>
//                     <MDBBtn
//                       outline
//                       color="default"
//                       size="sm"
//                       onClick={() => this.addNewComment()}
//                     >
//                       Comment
//                       <MDBIcon icon="pencil-alt" className="ml-1" />
//                     </MDBBtn>
//                     <br />
//                     <hr />
//                     <MDBCardTitle tag="h5">Comments...</MDBCardTitle>

//                     {/* {this.state.comments.map((el, index) => (
//                       <Comment
//                         el={el}
//                         index={index}
//                         key={el.comment_id}
//                         remove={this.deleteComment}
//                       />
//                     ))} */}
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBRow>
//           </MDBContainer>
//         </MDBView>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   const { createComment, createInput, createTitle } = state;

//   return {
//     createComment,
//     createInput,
//     createTitle
//     // profile_img
//   };
// }

// export default connect(mapStateToProps, {
//   updateComment,
//   updatePostInput,
//   updatePostTitle,
//   updateUserInfo,
//   clearState
// })(Meet);
