import React, { Component } from 'react';
import { MDBInput, MDBAnimation, MDBBtn } from 'mdbreact';
import './editProfile.scss'

class EditProfile extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="profile-form-container" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center'
                
            }}>
                <MDBAnimation type="fadeIn" style={{
                    zIndex: '20'
                }}>
              <div className="overlay1" style={{
                  height: '100vh',
                  width: '100vw',
                  background: 'rgba(29,29,29, 0.426)',
                  position: 'fixed',
                  top: '0',
                  left: '0',
                  zIndex: '10',
              }}></div>

                <div className='profile-form' style={{
                    width: '40vw',
                    height: '70vh',
                    padding: '2rem',
                    background: 'rgba(255,255,255,.95',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    marginTop: '-35vh',
                    marginLeft: '-20vw',
                    borderRadius: '10px',
                    zIndex: '11',
                    boxShadow: '5px 5px 5px -3px rgba(29,29,29,.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'

                }}>
                    <div onClick={()=>this.props.toggle()} className="back">X</div>
                    <MDBInput label="Image URL" icon="image" style={{width:'30vw'}}/>
                    <MDBInput label="Name" icon="user" style={{width:'30vw'}}/>
                    <MDBInput label="Headline" icon='heading' style={{
                        width:'30vw'
                }}
                    />
                    <div className="location" style={{display: 'flex', justifyContent: 'space-around'}}>
                        <MDBInput label="City" 
                        />
                        <MDBInput label="State" />
                    </div>
                        <MDBInput label="LinkedIn" icon='link' style={{
                        width:'30vw',    
                }}
                        />
                        <MDBInput label="GitHub" icon='code-branch' style={{
                        width:'30vw',
                        marginTop: '!important 0',
                }}
                        />
                        <MDBBtn color="warning" style={{
                          width: '150px',
                          margin: 'auto'
                        }}>Submit</MDBBtn>
                    
                </div>
                </MDBAnimation>
            </div>
    
  
        );
    }
}

export default EditProfile;