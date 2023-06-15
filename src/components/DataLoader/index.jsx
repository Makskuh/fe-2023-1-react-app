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
    const { render } = this.props;
    const layout = render(this.state);
    return layout;
  }
}

DataLoader.propTypes = {
  loadData: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};

export default DataLoader;
