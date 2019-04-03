import React, { Component } from 'react';
import moment from 'moment';

import TimeView from './TimeView';

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
      intervalId: null,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
    this.setState({
      intervalId,
    });
    this.updateTime();
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  updateTime = () => {
    this.setState({
      time: moment(),
    });
  }

  render() {
    const { time } = this.state;

    if (!time) { return null; }
    return (<TimeView time={time} />);
  }
}
