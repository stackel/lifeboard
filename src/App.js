import React from 'react';
import moment from 'moment';

import GBLatestVideos from './components/dashboard/giant-bomb/GBLatestVideos';
import Gmail from './components/dashboard/gmail/Gmail';
import PhilipsHue from './components/dashboard/philips-hue/PhilipsHue';
import Chromecast from './components/dashboard/chromecast/Chromecast';
import UpcomingMusic from './components/dashboard/upcoming-music/UpcomingMusic';
import GameReleases from './components/dashboard/game-releases/GameReleases';

function App() {
  return (
    <div className="mw8 center pt3 pb6">
      <h1 className="sans-serif tc f2">
        {"It's "}
        {moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}
      </h1>
      <div className="mt4">
        <PhilipsHue />
      </div>
      <div className="mt4">
        <Chromecast />
      </div>
      <div className="mt4">
        <Gmail />
      </div>
      <div className="mt4">
        <GameReleases />
      </div>
      <div className="mt4">
        <GBLatestVideos />
      </div>
      <div className="mt4">
        <UpcomingMusic />
      </div>

    </div>
  );
}

export default App;
