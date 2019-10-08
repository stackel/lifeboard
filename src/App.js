import React from 'react';
import GBLatestVideos from './components/dashboard/giant-bomb/LatestVideos';
import GBCurrentLive from './components/dashboard/giant-bomb/LiveShows';
import UpcomingMusic from './components/dashboard/upcoming-music/UpcomingMusic';
import GameReleases from './components/dashboard/giant-bomb/GameReleases';
// import Recipes from './components/dashboard/recipes/Recipes';
import Standings from './components/dashboard/allsvenskan/Standings';
import Holidays from './components/dashboard/holidays/Holidays';
import Time from './components/dashboard/time/Time';
import Weather from './components/dashboard/weather/Weather';
import PhilipsHue from './components/dashboard/philips-hue/PhilipsHue';
// import DeparturesWithFetch from './components/dashboard/departures/DeparturesWithFetch';
import News from './components/dashboard/news/News';
import GBUpcoming from './components/dashboard/giant-bomb/UpcomingVideos';
import UpcomingBeer from './components/dashboard/systembolaget/UpcomingBeer';
import Stocks from './components/dashboard/stocks/Stocks';
import SunriseSunset from './components/dashboard/sunrise-sunset/SunriseSunset';

function App() {
  return (
    <div className="bg-near-black mt4">

      <div className="cf fl w-20 pt5 pr2">
        <div className="tc">
          <Time />
          <div className="mv4">
            <SunriseSunset lat={59.305377} lng={18.145041} />
          </div>
          <Weather />
        </div>
        <div className="pt5 tc">
          <PhilipsHue />
        </div>
      </div>

      <div className="fl w-80 pr4">
        <div className="cf ">
          <div className="fl w-20 pr2">
            <GBCurrentLive />
          </div>
          <div className="fl w-20 pr2 pl2">
            <GameReleases />
          </div>
          <div className="fl w-20 pl2 pr2">
            <GBUpcoming />
          </div>
          <div className="fl w-20 pl2 pr2">
            <UpcomingMusic />
          </div>
          <div className="fl w-20 pl2">
            <News
              label="News"
              filter={{ type: 'sources', value: 'reuters' }}
            />
          </div>
        </div>

        <div className="cf">
          <div className="fl w-20 pr2 pl2">
            <GBLatestVideos />
          </div>
          <div className="fl w-20 pl2 pr2">
            <Stocks symbol="STO:IMMU" />
          </div>
          <div className="fl w-20 pl2 pr2">
            <UpcomingBeer />
          </div>
          <div className="fl w-20 pl2 pr2">
            <Standings />
          </div>
          <div className="fl w-20 pl2">
            <Holidays />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
