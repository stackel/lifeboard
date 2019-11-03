/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Standings from './Standings';

storiesOf('Components/Bandy', module)
  .add('Standings (Prod.)', () => (
    <div className="pa4 mw6">
      <Standings />
    </div>
  ));
