import { Col, Container, Row } from "react-bootstrap";
import premium from "../assets/4NCFBAA.png";
import propic from "../assets/avatar.png";
function Settings() {
  return (
    <Container className="w-50 text-secondary mt-5">
      <h1 className="text-black">Account</h1>
      <hr />
      <Row>
        <Col xs={3}>
          <p>MEMBERSHIP &AMP; BILLING</p>
          <button className="border-1 border-light">Cancel Membership</button>
        </Col>
        <Col>
          <Row>
            <Col className="text-start">
              <p className="text-black fw-bold">student@strive.school</p>
              <p>Password: ********</p>
              <p>Phone: 321 044 1279</p>
            </Col>
            <div className="col text-end text-primary">
              <p>Change Account email</p>
              <p>Change Password</p>
              <p>Change phone number</p>
            </div>
          </Row>
          <hr />
          <Row>
            <Col className="text-start">
              <p className="text-black fw-bold">
                <span className="d-block">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0388/3771/4989/files/PAYPAL_LOGO_480x480.png?v=1650301781"
                    alt="logo"
                    className="logo"
                    width={"80px"}
                  />
                </span>
                admin@strive.school
              </p>
            </Col>
            <div className="col text-end text-primary">
              <p>Update payment info</p>
              <p>Billing details</p>
            </div>
          </Row>
          <hr />
          <div className="row">
            <div className="col text-end text-primary">
              <p>Redeem gift card or promo code</p>
              <p>Where to buy gift cards</p>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={3}>PLAN DETAILS</Col>
        <Col>
          <Row>
            <Col className="text-start text-black">
              <p className="fw-bold">
                Premium
                <span>
                  <img src={premium} alt="logo" width={"100px"} />
                </span>
              </p>
            </Col>
            <Col className="text-end text-primary">
              <p>Change plan</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row className="row">
        <Col xs={3}>SETTINGS</Col>
        <Col className="text-start text-primary">
          <p>Parental controls</p>
          <p>Test Participation</p>
          <p>Manage download services</p>
          <p>Activate a device</p>
          <p>Recent device streaming activity</p>
          <p>Sign out of all devices</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={3}>MY PROFILE</Col>
        <Col>
          <Row>
            <Col className="text-start text-black fw-bold">
              <span>
                <img src={propic} alt="propic" className="logo pe-2" width={"40px"} />
              </span>
              Strive Student
            </Col>
            <Col className="text-end text-primary">
              <p>manage profiles</p>
              <p>Add profile email</p>
            </Col>
          </Row>
          <Row className="text-primary">
            <Col className="text-start">
              <p>Language</p>
              <p>Playback settings</p>
              <p>Subtitle Appearance</p>
            </Col>
            <Col className="text-start">
              <p>Viewing activity</p>
              <p>Ratings</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;
