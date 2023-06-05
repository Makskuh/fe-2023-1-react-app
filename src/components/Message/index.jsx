import React from 'react';

class Message extends React.Component {
  render() {
    const { text, author, isImportant } = this.props;

    const style = {
      padding: '20px',
      backgroundColor: isImportant ? 'red' : 'black',
      color: isImportant ? 'black' : 'white',
    };

    return (
      <article style={style}>
        <p>Author: {author}</p>
        <p>Message: {text}</p>
      </article>
    );
  }
}

export default Message;
