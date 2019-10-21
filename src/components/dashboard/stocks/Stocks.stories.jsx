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
        stocks={[{
          symbol: 'STO:IMMU',
          acquiredAt: 12.87,
        }, {
          symbol: 'STO:SOLT',
          acquiredAt: 20.50,
        }, {
          symbol: 'STO:EOLU-B',
          acquiredAt: 123.00,
        }]}
      />
    </div>
  ));
