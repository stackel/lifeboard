/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Stocks from './Stocks';

storiesOf('Components/Stocks', module)
  .add('Stocks', () => (
    <div className="mw5">
      <Stocks symbol="STO:IMMU" />
    </div>
  ));
