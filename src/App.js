import React from 'react';
import GBLatestVideos from './components/dashboard/giant-bomb/GBLatestVideos';
import GBCurrentLive from './components/dashboard/giant-bomb/GBCurrentLive';
// import Gmail from './components/dashboard/gmail/Gmail';
import UpcomingMusic from './components/dashboard/upcoming-music/UpcomingMusic';
import GameReleases from './components/dashboard/game-releases/GameReleases';
import Recipes from './components/dashboard/recipes/Recipes';
import Holidays from './components/dashboard/holidays/Holidays';
import Time from './components/dashboard/time/Time';
import Weather from './components/dashboard/weather/Weather';
import PhilipsHue from './components/dashboard/philips-hue/PhilipsHue';
// import DeparturesWithFetch from './components/dashboard/departures/DeparturesWithFetch';
import NewsWithFetch from './components/dashboard/news/NewsWithFetch';
import GBUpcoming from './components/dashboard/giant-bomb/GBUpcoming';
import UpcomingBeer from './components/dashboard/systembolaget/UpcomingBeer';
import Stocks from './components/dashboard/stocks/Stocks';

function App() {
  return (
    <div className="bg-near-black">
      <div className="mw9 center ph0 pv4">
        <div className="cf mb4">
          <div className="fl w-30 tc">
            <Time />
            <Weather />
          </div>
          <div className="fl w-70">
            <PhilipsHue />
          </div>
        </div>

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
            <NewsWithFetch
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
            <Holidays />
          </div>
          <div className="fl w-20 pl2">
            <Recipes />
          </div>
        </div>


      </div>
    </div>
  );
}
export default App;
