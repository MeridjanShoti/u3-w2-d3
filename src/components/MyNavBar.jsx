import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/netflix_logo.png";
import { Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { Bell, Search } from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";
import propic from "../assets/avatar.png";
import kidsIcon from "../assets/kids_icon.png";
import { Link } from "react-router";
function MyNavBar(props) {
  const [searchBarShow, setSearchBarShow] = useState(false);
  const [searchedItem, setSearchedItem] = useState("false");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const handleSearch = (e) => {
    setSearchedItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetchSearch();
  };
  const showSearch = () => {
    if (searchBarShow === false) {
      setSearchBarShow(true);
    } else {
      setSearchBarShow(false);
    }
  };
  const fetchSearch = () => {
    fetch(`http://www.omdbapi.com/?s=${searchedItem}&apikey=9e9a3139`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.Search) {
          setSearchedMovies(data.Search);
        } else {
          setSearchedMovies([]);
          alert("la ricerca non ha prodotto alcun risultato");
        }
      })
      .catch((error) => console.error("ERRORE:", error));
  };

  return (
    <div className="bg-dark">
      <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container>
          <Navbar.Brand href="#home" onClick={() => props.changeState("home")}>
            <img src={logo} alt="logo" width="100px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border border-white" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
              <Link className="nav-link text-white" to="/tvshows">
                TV Shows
              </Link>
              <Nav.Link className="text-white" href="#link">
                Movies
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                Recently Added
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                My List
              </Nav.Link>
            </Nav>
            <Form className="d-flex ms-auto" onSubmit={handleSubmit}>
              <Search className="text-white align-self-center fs-4 mx-2" onClick={showSearch} />

              <Row className="me-auto align-items-center">
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className={searchBarShow === true ? "mr-sm-2" : "mr-sm-2 d-none"}
                    id="searchBar"
                    onChange={handleSearch}
                  />
                </Col>
                <Col>
                  <img src={kidsIcon} height="38px" />
                </Col>
                <Col>
                  <Bell className="text-white fs-4" />
                </Col>
                <Col>
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      <img src={propic} height="38px" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link className="dropdown-item" to="account">
                        Edit Profile
                      </Link>
                      <Link className="dropdown-item" to="settings">
                        Settings
                      </Link>
                      <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <div className="col text-start text-light">
          {searchedItem !== "false" && <h2 className="fs-5">{searchedItem}</h2>}
        </div>
        <Row>
          {searchedMovies !== null &&
            searchedMovies.map((movie) => (
              <Col key={movie.imdbID} xs={6} md={4} lg={2} className="p-1">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }}
                  className="filmPoster"
                ></img>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default MyNavBar;
