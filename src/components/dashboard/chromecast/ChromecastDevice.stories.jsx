import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { chromecastDevice } from '../../../resources/data/mocked';
import ChromecastDevice from './ChromecastDevice';

storiesOf('Components/Chromecast', module)
  .add('Chromecast Device', () => (
    <div className="pa4">
      <ChromecastDevice
        device={chromecastDevice}
        onPlayClicked={action('chromecast-device-on-play-clicked')}
        onPauseClicked={action('chromecast-device-on-pause-clicked')}
        onMuteClicked={action('chromecast-device-on-mute-clicked')}
        onUnmuteClicked={action('chromecast-device-on-unmute-clicked')}
      />
    </div>
  ));
