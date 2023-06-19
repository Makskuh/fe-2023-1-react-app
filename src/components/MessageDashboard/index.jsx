import React, { useState } from 'react';
import ImportantMessages from '../ImportantMessages';
import Message from '../Message';
import styles from './style.module.scss';

const messagesData = [
  {
    id: 1,
    text: 'Message 1 text (unimportant)',
    author: 'Author 1',
    isImportant: false,
  },
  {
    id: 2,
    text: 'Message 2 text (important)',
    author: 'Author 2',
    isImportant: true,
  },
  {
    id: 3,
    text: 'Message 3 text (important)',
    author: 'Author 3',
    isImportant: true,
  },
  {
    id: 4,
    text: 'This is new',
    author: 'Author 4',
    isImportant: false,
  },
];

function MessageDashboard(props) {
  const [messages, setMessages] = useState(structuredClone(messagesData));
  const [isDirectSort, setIsDirectSort] = useState(true);

  const sortMessages = () => {
    const copy = structuredClone(messages);

    copy.sort((a, b) => {
      if (isDirectSort) {
        // якщо треба айді по спаданню
        return b.id - a.id;
      }

      // якщо треба айді по зростанню
      return a.id - b.id;
    });

    setMessages(copy);
    setIsDirectSort(!isDirectSort);
  };

  const mapMessages = (message, index, arr) => (
    <Message key={message.id} {...message} makeImportant={makeImportant} />
  );

  const makeImportant = (id) => {
    const newMessages = [];

    for (let i = 0; i < messages.length; i++) {
      const message = structuredClone(messages[i]);

      if (message.id === id) {
        message.isImportant = true;
      }

      newMessages.push(message);
    }

    setMessages(newMessages);
  };

  const filterImportantMessages = (message) => message.isImportant;

  const importantMessagesArr = messages.filter(filterImportantMessages);
  const messagesArray = messages.map(mapMessages);

  return (
    <>
      <div>
        <p className={styles.display}>
          Sort order is {isDirectSort ? 'direct' : 'reversed'}
        </p>
        <button className={styles.btn} onClick={sortMessages}>
          Reverse order
        </button>
      </div>
      <div>
        <ImportantMessages messages={importantMessagesArr} />
      </div>
      {messagesArray}
    </>
  );
}

export default MessageDashboard;
