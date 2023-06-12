import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import cx from 'classnames';
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

    // const className1 = classNames('string1', 'string2', 'string3');
    // const className2 = classNames({ string1: false });
    // const className3 = classNames('string0', { string1: true });

    const className = classNames('message', {isImportant: isImportant, });

    return (
      <article className={className}>
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

Message.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  isImportant: PropTypes.bool,
  makeImportant: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

Message.defaultProps = {
  text: 'PUT SOME TEXT PROP',
  author: 'WHO KNOWS, GIVE AUTHOR PROP',
  makeImportant: () => {},
  id: -1,
};

export default Message;
