import React from 'react';
import GBLatestVideos from './components/dashboard/giant-bomb/GBLatestVideos';
import GBCurrentLive from './components/dashboard/giant-bomb/GBCurrentLive';
import Gmail from './components/dashboard/gmail/Gmail';
import UpcomingMusic from './components/dashboard/upcoming-music/UpcomingMusic';
import GameReleases from './components/dashboard/game-releases/GameReleases';
import Recipes from './components/dashboard/recipes/Recipes';

import Time from './components/dashboard/time/Time';
import Weather from './components/dashboard/weather/Weather';
import PhilipsHue from './components/dashboard/philips-hue/PhilipsHue';
import Chromecast from './components/dashboard/chromecast/Chromecast';
import DeparturesWithFetch from './components/dashboard/departures/DeparturesWithFetch';
import NewsWithFetch from './components/dashboard/news/NewsWithFetch';

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

      <div className="cf ">
        <div className="fl w-third">
          <div className="pr2">
            <NewsWithFetch
              label="News"
              filter={{ type: 'sources', value: 'google-news' }}
            />
          </div>
        </div>
        <div className="fl w-third">
          <UpcomingMusic />
        </div>
        <div className="fl w-third">
          <Recipes />
        </div>

      </div>
      <div className="cf">
        <div className="fl w-third">
          <DeparturesWithFetch />
        </div>
      </div>
    </div>
  );
}
export default App;
