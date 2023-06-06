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

  handleImportant = () => {
    const { makeImportant, id } = this.props;
    makeImportant(id);
  };

  render() {
    const { text, author, isImportant, makeImportant, id } = this.props;
    const { isRead } = this.state;

    const readStatusElem = <p>Message is read</p>;

    return (
      <article className={`message${isImportant ? ' isImportant' : ''}`}>
        <p>Author: {author}</p>
        <p>Message: {text}</p>
        <button onClick={this.handleClick}>Read message</button>
        <button onClick={this.handleImportant}>Make Importand</button>
        {/* {isRead ? readStatusElem : false } */}
        {isRead && readStatusElem}
      </article>
    );
  }
}

export default Message;
