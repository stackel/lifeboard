import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import GBLatestVideos from './components/dashboard/giant-bomb/GBLatestVideos';
import GBCurrentLive from './components/dashboard/giant-bomb/GBCurrentLive';
import Gmail from './components/dashboard/gmail/Gmail';
import PhilipsHue from './components/dashboard/philips-hue/PhilipsHue';
import Chromecast from './components/dashboard/chromecast/Chromecast';
import UpcomingMusic from './components/dashboard/upcoming-music/UpcomingMusic';
import GameReleases from './components/dashboard/game-releases/GameReleases';
import Recipes from './components/dashboard/recipes/Recipes';

import Time from './components/dashboard/time/Time';
import TimeView from './components/dashboard/time/TimeView';
import Weather from './components/dashboard/weather/Weather';
import WeatherView from './components/dashboard/weather/WeatherView';

import { weather } from './resources/data/mocked/weather';

function App({ mocked }) {
  return (
    <div className="mw8 center pa3 debug">
      <div className="cf">
        <div className="fl w-30">
          {
            mocked && <Time time={moment()} />
          }
          {
            !mocked && <TimeView time={moment()} />
          }
        </div>
        <div className="fl w-30">
          {
            mocked
            && (
            <WeatherView weather={
              {
                temperature: weather.main.temp,
                description: weather.weather[0].description,
              }}
            />
            )
          }
          {
            !mocked && <Weather />
          }
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
App.propTypes = {
  mocked: PropTypes.bool,
};

App.defaultProps = {
  mocked: false,
};
export default App;
