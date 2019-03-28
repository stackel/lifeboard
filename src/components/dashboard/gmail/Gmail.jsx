/* global gapi */
/* global document */

import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import {
  GMAIL_API_KEY, GMAIL_CLIENT_ID, GMAIL_DISCOVERY_DOCS, GMAIL_SCOPES,
}
  from '../../../resources/config/keys';

import GmailMessage from './GmailMessage';

export default class Gmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      gapiLoaded: false,
      gapiClientLoaded: false,
      isSignedIn: false,
      unreadMessages: [],
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

  initClient = () => {
    gapi.client.init({
      apiKey: GMAIL_API_KEY,
      clientId: GMAIL_CLIENT_ID,
      discoveryDocs: GMAIL_DISCOVERY_DOCS,
      scope: GMAIL_SCOPES,
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
      return (
        <p className="dark-red sans-serif f4">
          {error.details}
        </p>
      );
    }

    if (!gapiLoaded) {
      return (
        <p className="dark-red sans-serif f4">
          Google API not loaded
        </p>
      );
    }

    if (!gapiClientLoaded) {
      return (
        <p className="dark-red sans-serif f4">
          Google API client not initiated
        </p>
      );
    }
    if (!unreadMessages || !unreadMessages.length) {
      return null;
    }

    return (
      <div>
        <h2 className="sans-serif f4 mb1"> Unread emails </h2>
        <Carousel
          dragging
          slidesToShow={3}
          swiping
          renderBottomCenterControls={() => null}
        >
          {
          unreadMessages.map(message => (
            <div className="dib pr3" key={message.id}>
              <GmailMessage message={message} />
            </div>
          ))}
          {
          false
          && <button type="button" onClick={this.handleSignOutClick}> Sign out </button>
        }
          {
          !isSignedIn
          && <button type="button" onClick={this.handleSignInClick}> Sign in </button>
        }
        </Carousel>
      </div>
    );
  }
}
