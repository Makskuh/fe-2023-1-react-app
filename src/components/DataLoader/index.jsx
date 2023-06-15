import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class DataLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.load();
  }

  load = () => {
    const { loadData } = this.props;
    this.setState({
      isLoading: true,
    });

    loadData()
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { render, children } = this.props;
    // const layout = render(this.state);
    // return layout;
    return children(this.state);
  }
}

DataLoader.propTypes = {
  loadData: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default DataLoader;
