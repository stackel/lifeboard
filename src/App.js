import React from 'react';

import GBLatestVideos from './components/dashboard/giant-bomb/GBLatestVideos';
import GBCurrentLive from './components/dashboard/giant-bomb/GBCurrentLive';
import Gmail from './components/dashboard/gmail/Gmail';
import PhilipsHue from './components/dashboard/philips-hue/PhilipsHue';
import Chromecast from './components/dashboard/chromecast/Chromecast';
import UpcomingMusic from './components/dashboard/upcoming-music/UpcomingMusic';
import GameReleases from './components/dashboard/game-releases/GameReleases';
import TimeAndWeather from './components/dashboard/time-and-weather/TimeAndWeather';
import Recipes from './components/dashboard/recipes/Recipes';

function App() {
  return (
    <div className="mw8 center pt3 pb6">
      <div className="mt4">
        <TimeAndWeather />
      </div>
      <div className="mt4">
        <PhilipsHue />
      </div>
      <div className="mt4">
        <Chromecast />
      </div>
      <div className="mt4">
        <GBCurrentLive />
      </div>
      <div className="mt4">
        <Gmail />
      </div>
      <div className="mt4">
        <Recipes />
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
