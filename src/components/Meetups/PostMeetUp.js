import React from 'react'
import { MDBInput, MDBAnimation, MDBBtn, MDBIcon, MDBContainer } from 'mdbreact'

export default function PostMeetUp(props) {
  const el = props.meetUpPosts
  return (
    <div>
      <MDBContainer>
        <MDBInput value={el.title} />
        <MDBInput value={el.img} />
        <MDBInput value={el.date} />
        <MDBInput value={el.time} />
        <MDBInput value={el.description} />
        <MDBInput value={el.street} />
        <MDBInput value={el.city} />
        <MDBInput value={el.state} />
        <MDBInput value={el.zipcode} />
      </MDBContainer>
    </div>
  )
}
