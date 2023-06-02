import React from 'react';
import './style.css';

class Greeting extends React.Component {
  render() {
    const { name } = this.props;
    // console.log(name);

    // v1
    // if(!name) {
    //   return <p>Hello Guest!</p>;
    // }

    // return <p>Hello {name}!</p>;

    // v2
    // const userName = !name ? 'Guest' : name;
    // return <p>Hello {userName}!</p>;

    // v2.5

    // const stylesObj = {
    //   backgroundColor: 'green',
    //   padding: '20px'
    // };

    // return <p style={stylesObj} >Hello {!name ? 'Guest' : name}!</p>;

    // return (
    //   <p style={{ backgroundColor: 'green', padding: '20px' }}>
    //     Hello {!name ? 'Guest' : name}!
    //   </p>
    // );

    return <p className='greetingText'>Hello {!name ? 'Guest' : name}!</p>;
  }
}

// v3
// function Greeting(props) {
//   const { name } = props;

//   if (!name) {
//     return <GreetGuest />;
//   }

//   return <GreetUser userName={name} />;
// }

// v 3.5
// function Greeting(props) {
//   const { name } = props;
//   return !name ? <GreetGuest /> : <GreetUser userName={name} />;
// }

// function GreetUser(props) {
//   return <p>Hello {props.userName}!</p>;
// }

// const GreetGuest = (props) => <p>Hello Guest!</p>;

export default Greeting;
