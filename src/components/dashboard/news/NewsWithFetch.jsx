import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';

import { FETCH_INTERVAL, API_URL, API_KEY } from '../../../resources/config/news';
import List from '../../base/list/List';

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
    const { filter } = this.props;
    axios.get(API_URL, {
      params: {
        [filter.type]: filter.value,
        apiKey: API_KEY,
      },
    }).then((response) => {
      this.setState({
        newsItems: response.data.articles,
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
      return (
        <List
          label={label}
          loading={loading}
        />
      );
    }
    if (!newsItems || !newsItems.length) {
      return null;
    }
    return (
      <div>
        {
          <List
            label={label}
            items={newsItems.map(newsItem => ({
              imageUrl: newsItem.urlToImage,
              title: newsItem.title,
              subtitle: moment(newsItem.publishedAt).fromNow(),
              url: newsItem.url,
            }))}
          />
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
};

NewsWithFetch.defaultProps = {
  label: '',
  filter: {
    type: 'country',
    value: 'se',
  },
};
