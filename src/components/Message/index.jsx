import React from 'react';

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

    const style = {
      padding: '20px',
      backgroundColor: isImportant ? 'red' : 'black',
      color: isImportant ? 'black' : 'white',
      border: '5px solid blue',
      margin: '10px 0px',
    };

    const readStatusElem = <p>Message is read</p>;

    return (
      <article style={style}>
        <p>Author: {author}</p>
        <p>Message: {text}</p>
        <button onClick={this.handleClick}>Read message</button>
        {/* {isRead ? readStatusElem : false } */}
        { isRead && readStatusElem }
      </article>
    );
  }
}

export default Message;
