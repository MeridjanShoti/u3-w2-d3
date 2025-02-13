import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import Comments from "./Comments";

function Details() {
  const params = useParams();
  const [movie, setMovie] = useState("");
  const [hide, setHide] = useState(true);
  const fetchFilm = () => {
    fetch(`http://www.omdbapi.com/?i=${params.movieId}&apikey=9e9a3139`)
      .then((resp) => resp.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => console.error("ERRORE:", error));
  };
  useEffect(() => {
    fetchFilm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.movieId]);
  return (
    <>
      <Card style={{ width: "50%" }} className="mx-auto mt-5 text-center">
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Plot}</Card.Text>
          {!hide && <Comments movieId={movie.imdbID} />}
          <Button variant="primary" onClick={() => (hide ? setHide(false) : setHide(true))}>
            {hide ? "Show Comments" : "Hide Comments"}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
export default Details;
