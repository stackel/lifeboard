/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Stocks from './Stocks';
// import mocked from './mocked';

storiesOf('Components/Stocks', module)
  .add('Stocks', () => (
    <div className="mw6">
      <Stocks
        // mocked={mocked}
        stocks={[{
          symbol: 'IMMU.ST',
          acquiredAt: 11.5,
        },
        {
          symbol: 'CLAS-B.ST',
          acquiredAt: 83.3,
        }, {
          symbol: 'RATO-B.ST',
          acquiredAt: 26.3,
        }, {
          symbol: 'TEL2-B.ST',
          acquiredAt: 70.2,
        }]}
      />
    </div>
  ));
