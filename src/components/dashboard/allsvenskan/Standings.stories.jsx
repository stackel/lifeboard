/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Standings from './Standings';

storiesOf('Components/Allsvenskan', module)
  .add('Standings', () => (
    <div className="pa4">
      <Standings />
    </div>
  ));
