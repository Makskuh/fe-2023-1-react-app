import React from "react";

class Greeting extends React.Component {
  render() {
    const { name } = this.props;
    console.log(name);
    return <p>Hello {name}!</p>;
  }
}

export default Greeting;