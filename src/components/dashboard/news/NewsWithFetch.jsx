import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { FETCH_INTERVAL, API_URL, API_KEY } from '../../../resources/config/news';
import NewsItems from './NewsItems';

export default class NewsWithFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItems: [],
      loading: true,
      intervalId: null,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.fetchNews();
    }, FETCH_INTERVAL);
    this.setState({
      intervalId,
    });
    this.fetchNews();
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  fetchNews = () => {
    const { filter, limit } = this.props;
    axios.get(API_URL, {
      params: {
        [filter.type]: filter.value,
        apiKey: API_KEY,
      },
    }).then((response) => {
      this.setState({
        newsItems: response.data.articles.slice(0, limit),
        loading: false,
      });
    }, () => {
      this.setState({ loading: false });
    });
  }


  render() {
    const { loading, newsItems } = this.state;
    const { label } = this.props;

    if (loading) {
      return <span> loading</span>;
    }
    if (!newsItems || !newsItems.length) {
      return null;
    }
    return (
      <div>
        <h2 className="sans-serif f4 mb3">
          {label}
        </h2>
        {
          <NewsItems newsItems={newsItems} />
        }
      </div>
    );
  }
}

NewsWithFetch.propTypes = {
  filter: PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.string,
  }),
  label: PropTypes.string,
  limit: PropTypes.number,
};

NewsWithFetch.defaultProps = {
  label: '',
  filter: {
    type: 'country',
    value: 'se',
  },
  limit: 3,
};
