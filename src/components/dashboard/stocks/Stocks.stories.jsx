/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Stocks from './Stocks';
import mocked from './mocked';

storiesOf('Components/Stocks', module)
  .add('Stocks', () => (
    <div className="mw5 pa4">
      <Stocks
        mocked={mocked}
        stocks="IMMU.ST,CLAS-B.ST,RATO-B.ST,TEL2-B.ST"
      />
    </div>
  ));
