import React, { Component } from 'react';
import axios from 'axios';

import {
  API_URL, API_KEY, MAX_JOURNEYS,
  FETCH_INTERVAL, STOPS,
} from '../../../resources/config/departures';
import List from '../../base/list/List';

const stop = STOPS[0];

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

    if (loading) {
      return <List label={`Avgångar ${stop.label}`} loading limitTo={1} />;
    }
    if (!departures || !departures.length) {
      return null;
    }
    return (
      <div>
        {
          <List
            label={`Avgångar ${stop.label}`}
            items={departures.map(departure => ({
              imageUrl: 'https://static1.squarespace.com/static/57178197a3360c8b8cb793d1/5720ba631bbee05e96bfa202/5720bc85e707eb45bda840fc/1564400299873/sl-logo.png?format=1500w',
              title: departure.time.slice(0, 5),
              subtitle: departure.transportNumber,
            }))}
          />
       }
      </div>
    );
  }
}
