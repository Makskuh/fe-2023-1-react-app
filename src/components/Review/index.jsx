import React from 'react';
import './style.css';

function Review(props) {
  const { reviewData } = props;
  const { title, mark, text, authorName, authorImg } = reviewData;
  return (
    <div className='commentsContainer'>
      <div class='commentWrapper'>
        <article className='commentArticle'>
          <div className='authorData'>
            <div className='imageWrapper'>
              <img className='authorImg' src={authorImg} alt={authorName} />
            </div>
            <p className='authorName'>{authorName}</p>
          </div>
          <div className='commentBody'>
            <h2 className='commentTitle'>{title}</h2>
            <p className='mark'>{mark}</p>
            <p className='commentText'>{text}</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Review;
