import React, { Component } from 'react';
import HighReviewList from './HighReviewList';
import Review from './Review';

const reviews = [
  { id: 1, rating: 7, text: 'Дуже гарний відгук 1' },
  { id: 2, rating: 9, text: 'Дуже гарний відгук 2' },
  { id: 3, rating: 6, text: 'Дуже гарний відгук 3' },
  { id: 4, rating: 10, text: 'Дуже гарний відгук 4' },
];

export default class ReviewDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: reviews.map((review) => ({
        ...review,
        isRead: false,
      })),
    };
  }

  highRatedReviews = (review) => review.rating > 8;

  changeRead = (id) => {
    const { comments } = this.state;
    this.setState({
      comments: comments.map((review) => {
        const isSameId = id === review.id;

        return {
          ...review,
          // isRead: isSameId ? true : review.isRead
          isRead: isSameId ? !review.isRead : review.isRead,
        };
      }),
    });
  };

  render() {
    const { comments } = this.state;
    const filter = comments.filter(this.highRatedReviews);

    return (
      <div>
        <p>Всі відгуки</p>
        {comments.map((comme) => {
          return <Review review={comme} changeRead={this.changeRead} />;
        })}
        <HighReviewList reviews={filter} changeRead={this.changeRead} />
      </div>
    );
  }
}
