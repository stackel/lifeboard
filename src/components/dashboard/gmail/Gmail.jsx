/* global gapi */
/* global document */
import React, { Component } from 'react';

import {
  API_KEY, CLIENT_ID, DISCOVERY_DOCS, SCOPES,
}
  from '../../../resources/config/gmail';

import GmailMessageList from './GmailMessageList';

export default class Gmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      gapiLoaded: false,
      gapiClientLoaded: false,
      isSignedIn: false,
      unreadMessages: [],
      intervalId: null,
    };
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';

    script.onload = () => {
      this.setState({
        gapiLoaded: true,
      }, () => {
        gapi.load('client:auth2', this.initClient);
      });
    };
    document.body.appendChild(script);
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  initClient = () => {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    }).then(() => {
      gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
      this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      this.setState({
        gapiClientLoaded: true,
      });
    }, (error) => {
      this.setState({
        error,
      });
    });
  }

  updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      /* const intervalId = setInterval(() => {
        this.getUnreadMessages();
      }, 1000);
      this.setState({
        intervalId,
      }); */
      this.getUnreadMessages();
    }
    this.setState({
      isSignedIn,
    });
  }

  handleSignInClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  }

  handleSignOutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  }

  getUnreadMessages = () => {
    gapi.client.gmail.users.messages.list({
      q: 'is:unread',
      userId: 'me',
    }).then((response) => {
      if (!response.result.messages) {
        return;
      }
      response.result.messages.forEach((message) => {
        gapi.client.gmail.users.messages.get({
          userId: 'me',
          id: message.id,
        }).then((messageResponse) => {
          const messageResult = messageResponse.result;
          this.setState(prevState => ({
            unreadMessages: [...prevState.unreadMessages, messageResult],
          }));
        });
      });
    });
  }


  render() {
    const {
      error, gapiLoaded, gapiClientLoaded, isSignedIn, unreadMessages,
    } = this.state;

    if (error) {
      return null;
    }

    if (!gapiLoaded || !gapiClientLoaded) {
      return (<div className="w-100 bg-near-white h4" />);
    }

    if ((!unreadMessages || !unreadMessages.length) && isSignedIn) {
      return null;
    }

    return (
      <div>
        <h2 className="sans-serif f4 mb1"> Unread emails </h2>
        <GmailMessageList messages={unreadMessages} />
        {
          !isSignedIn
          && (
          <button
            className="mv3 sans-serif f5 bg-black white ph3 pv2 pointer dim"
            type="button"
            onClick={this.handleSignInClick}
          >
            {'Sign in to get emails'}
          </button>
          )
        }
      </div>
    );
  }
}
