import React from 'react';
import { storiesOf } from '@storybook/react';

import GmailMessageList from './GmailMessageList';

import { gmailMessages } from '../../../resources/data/mocked/gmail';

storiesOf('Components/Gmail', module)
  .add('Gmail Message List', () => (
    <div className="pa4">
      <GmailMessageList messages={gmailMessages} />
    </div>
  ));
