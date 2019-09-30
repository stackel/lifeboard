/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Holidays from './Holidays';

storiesOf('Components/Holidays', module)
  .add('Holidays', () => (
    <Holidays />
  ));
