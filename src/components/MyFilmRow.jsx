import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

function MyFilmRow(props) {
  const [movies, setMovies] = useState([]);
  const search = props.search;
  const fetchFilms = () => {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=9e9a3139`)
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data.Search.slice(0, 6));
      })
      .catch((error) => console.error("ERRORE:", error));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchFilms, []);

  return (
    <Row>
      {movies.map((movie) => (
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
  );
}

export default MyFilmRow;
