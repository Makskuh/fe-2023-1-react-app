import React, { Component } from 'react';

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false,
      isError: false,
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.load();
    }
  }

  load = () => {
    const { currentPage } = this.state;
    this.setState({ isLoading: true });
    fetch(
      `https://randomuser.me/api/?page=${currentPage}&results=10&seed=testSeed`
    )
      .then((response) => response.json())
      .then((data) => {
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
  };

  prev = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage > 1 ? currentPage - 1 : 1,
    });
  };
  next = () => {
    const { currentPage } = this.state;

    this.setState({
      currentPage: currentPage + 1,
    });
  };

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

    return (
      <div>
        <div>
          <button onClick={this.prev}>Previous page</button>
          <button onClick={this.next}>Next page</button>
        </div>
        {userCards}
      </div>
    );
  }
}

export default UsersLoader;
