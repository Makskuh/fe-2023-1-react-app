import React from 'react';
import './style.css';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRead: false,
    };
  }

  handleClick = () => {
    this.setState({
      isRead: true,
    });
  };

  render() {
    const { text, author, isImportant } = this.props;
    const { isRead } = this.state;

    const readStatusElem = <p>Message is read</p>;

    return (
      <article className={`message${isImportant ? ' isImportant' : ''}`}>
        <p>Author: {author}</p>
        <p>Message: {text}</p>
        <button onClick={this.handleClick}>Read message</button>
        {/* {isRead ? readStatusElem : false } */}
        {isRead && readStatusElem}
      </article>
    );
  }
}

export default Message;
