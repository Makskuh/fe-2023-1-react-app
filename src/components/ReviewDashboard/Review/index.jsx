import React from 'react';

function Review({ review, changeRead }) {
  return (
    <div key={review.id}>
      <h3>{review.rating}</h3>
      <p>{review.text}</p>
      <button onClick={() => changeRead(review.id)}>Change</button>
      {review.isRead && <p>Is readed</p>}
    </div>
  );
}

export default Review;
