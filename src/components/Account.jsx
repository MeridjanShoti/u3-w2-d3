import propic from "../assets/avatar.png";
import { PencilFill } from "react-bootstrap-icons";
import { Col, Container, Row } from "react-bootstrap";

function Account() {
  return (
    <>
      <Container className="w-50 mt-5">
        <h1 className="text-white">EDIT PROFILE</h1>
        <hr className="text-white" />
        <Row className="row pt-2 gap-3">
          <Col xs={12} md={2} className="px-0">
            <div className="px-0 position-relative">
              <img className="img-fluid" src={propic} alt="propic" />
              <div className="bg-black position-absolute rounded-circle matita d-flex justify-content-center align-items-center bottom-0 left-0 m-2 border border-light border-1 p-1">
                <PencilFill />
              </div>
            </div>
          </Col>
          <Col xs={12} md className="px-0">
            <div className="bg-secondary px-2 py-1 fs-5 w-75 text-light">Strive Student</div>
            <p className="text-secondary fs-5 mt-5">Language:</p>
            <select className="bg-black text-light">
              <option value="English">English</option>
              <option value="Italiano">Italiano</option>
              <option value="Shqip">Shqip</option>
            </select>
            <hr className="text-secondary" />
            <p className="text-secondary fs-5">Maturity Settings:</p>
            <button className="text-light border-0 px-3 py-1 mb-3 bg-secondary">ALL MATURITY RATINGS</button>
            <p className="text-light">
              Show titles of <b>all maturity ratings</b> for this profile
            </p>
            <button className="border border-secondary text-secondary bg-dark px-3">EDIT</button>
            <hr className="text-secondary" />
            <p className="text-secondary fs-5">Autoplay Controls</p>
            <input
              type="checkbox"
              id="nextEpisode"
              className="form-check-input rounded-0 border border-secondary bg-secondary bg-dark p-2 fw-bold"
            />
            <label className="text-light ms-1" htmlFor="nextEpisode">
              Autoplay next episode in a series on all devices
            </label>
            <br />
            <input
              type="checkbox"
              id="previews"
              className="form-check-input rounded-0 border border-secondary bg-secondary bg-dark p-2 fw-bold"
            />
            <label className="text-light ms-1" htmlFor="previews">
              Autoplay previews while browsing on all devices
            </label>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <hr className="text-secondary" />
            <div className="d-flex justify-content-center justify-content-md-between flex-wrap flex-md-nowrap gap-2">
              <button className="px-2 w-75 w-md-25 fs-6 fw-bold border border-black bg-light">SAVE</button>
              <button className="px-2 w-75 w-md-25 fs-6 text-light border border-secondary bg-dark">CANCEL</button>
              <button className="px-2 w-75 w-md-25 fs-6 text-light border border-secondary bg-dark">
                DELETE PROFILE
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Account;
