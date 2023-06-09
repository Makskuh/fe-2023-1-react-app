import React from 'react';
import Review from '../Review';

function HighReviewList({ reviews, changeRead }) {
  
  const reviewsElems = reviews.map((r) => {
    return <Review review={r} changeRead={changeRead} />;
  });

  return (
    <section>
      <h2>Високий рейтинг</h2>
      {reviewsElems}
    </section>
  );
}

export default HighReviewList;
