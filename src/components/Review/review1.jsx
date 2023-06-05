import React from 'react';
import './style.css';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state;

    const {
      reviewData: { title, mark, text, authorName, authorImg, pros, cons },
    } = this.props;

    return (
      <article className='wrapper'>
        <img className='userImg' src={authorImg} alt='Something' />
        <p className='userName'>{authorName}</p>
        <h1 className='userTitle'>{title}</h1>
        <p className='userMark'>{mark}</p>
        <p className='userText'>{text}</p>
        <p className='goodProd'>{pros}</p>
        <p className='goodCons'>{cons}</p>
        <div className='counterContainer'>
          <button>Like</button>
          <p>{counter}</p>
          <button>Dislike</button>
        </div>
      </article>
    );
  }
}

export default Review;
