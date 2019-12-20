import React from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBContainer,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle
} from 'mdbreact'

export default function MeetUpsDash(props) {
  const el = props.meetUpPost
  return (
    <div key={el.id}>
      <MDBContainer
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <MDBCard
          style={{
            width: '75vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <MDBCardTitle>Title: {el.title}</MDBCardTitle>
          <MDBCardImage src={el.img} />
          <MDBCardBody>
            <h3>Date: {el.date} </h3>
            <h3>Time: {el.time}</h3>
            <h3>Description: {el.description} </h3>
            <h3>Street: {el.street} </h3>
            <h3>City: {el.city}</h3>
            <h3>State: {el.state} </h3>
            <h3>Zipcode: {el.zipcode}</h3>
          </MDBCardBody>
        </MDBCard>
        <MDBBtn
          style={{ height: '2rem' }}
          color="warning"
          size="sm"
          onClick={() => el.deletePost(el.id)}
        >
          X
        </MDBBtn>
      </MDBContainer>
    </div>
  )
}
