import React from 'react';
import GBLatestVideos from './components/dashboard/giant-bomb/GBLatestVideos';
import Gmail from './components/dashboard/gmail/Gmail';
import UpcomingMusic from './components/dashboard/upcoming-music/UpcomingMusic';
import GameReleases from './components/dashboard/game-releases/GameReleases';
import Recipes from './components/dashboard/recipes/Recipes';

import Time from './components/dashboard/time/Time';
import Weather from './components/dashboard/weather/Weather';
import PhilipsHue from './components/dashboard/philips-hue/PhilipsHue';
import GBCurrentLive from './components/dashboard/giant-bomb/GBCurrentLive';
import Chromecast from './components/dashboard/chromecast/Chromecast';

function App() {
  return (
    <div className="mw8 center pv4">
      <div className="cf">
        <div className="fl w-30 tc">
          <Time />
          <Weather />
        </div>
        <div className="fl w-70">
          <PhilipsHue />
        </div>
      </div>
      <div className="cf mt4">
        <div className="fl w-50">
          <GBCurrentLive />
        </div>
        <div className="fl w-50">
          <Chromecast />
        </div>
      </div>
      {
      false
     && (
     <div>
       <div className="mt4" />
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
     )
    }
    </div>
  );
}
export default App;
