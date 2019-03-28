import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { device } from '../../../resources/data/mocked/chromecast';
import ChromecastDevice from './ChromecastDevice';

storiesOf('Components/Chromecast', module)
  .add('Chromecast Device', () => (
    <div className="pa4">
      <ChromecastDevice
        device={device}
        onPlayClicked={action('chromecast-device-on-play-clicked')}
        onPauseClicked={action('chromecast-device-on-pause-clicked')}
        onMuteClicked={action('chromecast-device-on-mute-clicked')}
        onUnmuteClicked={action('chromecast-device-on-unmute-clicked')}
      />
    </div>
  ));
