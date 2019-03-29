import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';

import GmailMessage from './GmailMessage';

export default function GmailMessageList({ messages }) {
  return (
    <div>
      <Carousel
        dragging
        slidesToShow={3}
        swiping
        renderBottomCenterControls={() => null}
        renderCenterRightControls={() => null}
        renderCenterLeftControls={() => null}
      >
        {
        messages.map(message => (
          <div className="dib pr3" key={message.id}>
            <GmailMessage message={message} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

GmailMessageList.propTypes = {
  messages: PropTypes.arrayOf(GmailMessage.propTypes.message),
};

GmailMessageList.defaultProps = {
  messages: [],
};
