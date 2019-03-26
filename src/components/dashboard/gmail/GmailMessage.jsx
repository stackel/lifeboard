import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function GmailMessage({ message }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="link dim w5 dib pointer"
      href="https://mail.google.com/mail/ca/u/0/?shva=1#inbox/"
    >
      <h3 className="sans-serif f5 black v-bot truncate">
        {message.payload.headers.filter(
          payload => payload.name === 'Subject',
        )[0].value}
      </h3>
      <span className="db sans-serif f5 dark-gray truncate">
        {'From: '}
        {message.payload.headers.filter(
          payload => payload.name === 'From',
        )[0].value}
      </span>
      <span className="db mt2 b sans-serif f6 dark-gray">
        {moment(parseInt(message.internalDate, 10)).fromNow()}
      </span>
    </a>
  );
}

GmailMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string.isRequired,
    labelIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    internalDate: PropTypes.string.isRequired,
    payload: PropTypes.shape({
      headers: PropTypes.arrayOf(PropTypes.shape(
        {
          name: PropTypes.string,
          value: PropTypes.string,
        },
      )).isRequired,
    }).isRequired,
  }).isRequired,
};
