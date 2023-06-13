import React, { Component } from 'react';

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: true,
      isError: false,
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        this.setState({ users: data.results });
      })
      .catch((error) => {
        this.setState({
          isError: true,
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { users, isLoading, isError } = this.state;

    const userCards = users.map((user) => (
      <article key={user.login.uuid}>{JSON.stringify(user)}</article>
    ));

    if (isError) {
      return <h1>Error happened</h1>;
    }

    if (isLoading) {
      return <h1>Loading users...</h1>;
    }

    return <div>{userCards}</div>;
  }
}

export default UsersLoader;
