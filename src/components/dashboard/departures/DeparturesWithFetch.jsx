import React, { Component } from 'react';
import axios from 'axios';

import {
  API_URL, API_KEY, MAX_JOURNEYS,
  FETCH_INTERVAL, STOPS,
} from '../../../resources/config/departures';
import Departures from './Departures';

const defaultStop = STOPS[0];

export default class DeparturesWithFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      departures: [],
      intervalId: null,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.fetchDepartures();
    }, FETCH_INTERVAL);
    this.setState({
      intervalId,
    });
    this.fetchDepartures();
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  fetchDepartures = () => {
    const { stop } = this.props;
    axios.get(API_URL, {
      params: {
        key: API_KEY,
        id: stop.id,
        maxJourneys: MAX_JOURNEYS,
        format: 'json',
      },
    }).then((response) => {
      this.setState({
        departures: response.data.Departure,
        loading: false,
      });
    }, () => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading, departures } = this.state;
    const { stop } = this.props;

    if (loading) {
      return <span> loading</span>;
    }
    if (!departures || !departures.length) {
      return null;
    }
    return (
      <div>
        {
          <Departures departures={departures} stop={stop} />
        }
      </div>
    );
  }
}

DeparturesWithFetch.propTypes = {
  stop: Departures.propTypes.stop,
};

DeparturesWithFetch.defaultProps = {
  stop: defaultStop,
};
