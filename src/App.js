import React from 'react';
import Message from './components/Message';

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

// JSON.parse(JSON.stringify(messagesData))

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: structuredClone(messagesData),
      isDirectSort: true,
    };
  }

  sortMessages = () => {
    const { messages, isDirectSort } = this.state;

    /*
      1. взяти масив с даними
      2. відсортувати його
      3. оновити стан
    */

    const copy = structuredClone(messages);

    copy.sort((a, b) => {
      if (isDirectSort) {
        // якщо треба айді по спаданню
        return b.id - a.id;
      }

      // якщо треба айді по зростанню
      return a.id - b.id;
    });

    this.setState({
      messages: copy,
      isDirectSort: !isDirectSort,
    });
  };

  mapMessages = (message, index, arr) => (
    <Message
      key={message.id}
      id={message.id}
      text={message.text}
      author={message.author}
      isImportant={message.isImportant}
      makeImportant={this.makeImportant}
    />
  );

  makeImportant = (id) => {
    const { messages } = this.state;

    const newMessages = [];

    for(let i = 0; i < messages.length; i++) {
      const message = structuredClone(messages[i]);

      if(message.id === id) {
        message.isImportant = true;
      }

      newMessages.push(message);
    }

    this.setState({
      messages: newMessages
    });
  }

  render() {
    const { messages, isDirectSort } = this.state;

    const messagesArray = messages.map(this.mapMessages);

    return (
      <>
        <div>
          <p>Sort order is {isDirectSort ? 'direct': 'reversed'}</p>
          <button onClick={this.sortMessages}>Reverse order</button>
        </div>
        {messagesArray}
      </>
    );
  }
}

export default App;
