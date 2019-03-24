import React from 'react';
import { storiesOf } from '@storybook/react';

import GmailMessage from './GmailMessage';

import { gmailMessage } from '../../../resources/data/mocked';

storiesOf('Components/Gmail', module)
  .add('Gmail Message', () => (
    <div className="mw6 pa4">
      <GmailMessage message={gmailMessage} />
    </div>
  ));
