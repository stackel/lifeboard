import { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class FetchWithInterval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      response: [],
      intervalId: null,
      error: false,
    };
  }

  componentDidMount() {
    const { fetchInterval, mocked } = this.props;
    if (mocked) {
      return;
    }

    const intervalId = setInterval(() => {
      this.fetch();
    }, fetchInterval);
    this.setState({
      intervalId,
    });
    this.fetch();
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  fetch = () => {
    const {
      url, params, headers,
    } = this.props;
    axios.get(url, {
      params, headers: headers || {},
    }).then((response) => {
      this.setState({
        response,
        loading: false,
        error: false,
      });
    }, (error) => {
      this.setState({ loading: false, error });
    });
  }

  render() {
    const { loading, response, error } = this.state;
    const { children, mocked } = this.props;
    if (mocked) {
      return children(mocked, false, null);
    }
    return children(response, loading, error);
  }
}

FetchWithInterval.propTypes = {
  fetchInterval: PropTypes.number,
  url: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  params: PropTypes.objectOf(PropTypes.string),
  headers: PropTypes.objectOf(PropTypes.string),
};

FetchWithInterval.defaultProps = {
  fetchInterval: 60000,
  params: null,
  headers: null,
};
