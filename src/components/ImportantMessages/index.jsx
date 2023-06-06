function ImportantMessages(props) {
  const { messages } = props;

  const messagesElems = messages.map((message) => (
    <li key={message.id}>
      <p>{message.text}</p>
    </li>
  ));

  return <ul>{messagesElems}</ul>;
}

export default ImportantMessages;
