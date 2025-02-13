import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router";

function TvShows() {
  const [movies, setMovies] = useState([]);
  const search = "harry potter";
  const fetchFilms = () => {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=9e9a3139`)
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data.Search);
      })
      .catch((error) => console.error("ERRORE:", error));
  };

  useEffect(fetchFilms, []);

  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.imdbID} xs={6} md={4} lg={2} className="p-1">
          <Link to={"/moviedetails/" + movie.imdbID}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }}
              className="filmPoster"
            ></img>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default TvShows;
