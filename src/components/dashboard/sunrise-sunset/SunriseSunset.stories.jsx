/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import SunriseSunset from './SunriseSunset';

storiesOf('Components/Sunrise Sunset', module)
  .add('SunriseSunset', () => (
    <div className="mw5">
      <SunriseSunset lat={59.305377} lng={18.145041} />
    </div>
  ));
