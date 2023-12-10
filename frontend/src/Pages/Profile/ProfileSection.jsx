import React, { useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

const ProfileSection = ({ tag }) => {
  return(
    <section style={{ backgroundColor: 'white' }}>
      <MDBContainer className="py-5">
       
        <MDBRow>
          <MDBCol lg="6" >
            <MDBCard className="mb-12">
            <MDBCardBody className="text-center" lg="6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <MDBCardImage
    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
    alt="avatar"
    className="rounded-circle"
    style={{ width: '180px' }}
  /> <br/>
  <p className="text-muted mb-1" style={{ fontSize: "x-large" }}>Harshith</p>
</MDBCardBody>
          </MDBCard>

          </MDBCol>
          <MDBCol lg="6">
            <MDBCard className="mb-12">
            <MDBCardBody className="text-center" lg="6" style={{  justifyContent: "center", alignItems: "center" }}>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Harshith Chunduri</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">harshith.jethu@gmail.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">+91-8919091531</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default ProfileSection;
