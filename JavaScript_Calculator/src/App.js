import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, } from "mdbreact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3"></MDBCol>
            <MDBCol md="6">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardText className="text-center">
                      <h1>JavaScript Calculator Developing.....</h1>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="3"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

    );
  }
}

export default App;
