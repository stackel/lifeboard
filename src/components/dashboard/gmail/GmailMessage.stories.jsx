import React from 'react';
import { storiesOf } from '@storybook/react';

import GmailMessage from './GmailMessage';

import { gmailMessages } from '../../../resources/data/mocked/gmail';

const gmailMessage = gmailMessages[0];

storiesOf('Components/Gmail', module)
  .add('Gmail Message', () => (
    <div className="mw6 pa4">
      <GmailMessage message={gmailMessage} />
    </div>
  ));
