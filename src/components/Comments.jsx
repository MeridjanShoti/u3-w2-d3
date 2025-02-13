import { useEffect, useState } from "react";

function Comments(props) {
  const [comments, setComments] = useState([]);
  const fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.movieId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNmU2ZGI3NDcwMTAwMTU4YjJiOTgiLCJpYXQiOjE3Mzg4NDY2ODksImV4cCI6MTc0MDA1NjI4OX0.eAwJcN7qcyTpbjvhsgvtZk69pqPqTIMtlD_ewZKx4Ng",
      },
    })
      .then((resp) => resp.json())
      .then((fetchedComments) => {
        setComments(fetchedComments);
      });
  };
  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {comments.map((comment, index) => (
        <p key={"comment" + index} className="border">
          {comment.comment}
        </p>
      ))}
    </>
  );
}
export default Comments;
