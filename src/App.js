import React from 'react';
import GBLatestVideos from './components/dashboard/giant-bomb/GBLatestVideos';
import GBCurrentLive from './components/dashboard/giant-bomb/GBCurrentLive';
// import Gmail from './components/dashboard/gmail/Gmail';
import UpcomingMusic from './components/dashboard/upcoming-music/UpcomingMusic';
import GameReleases from './components/dashboard/game-releases/GameReleases';
// import Recipes from './components/dashboard/recipes/Recipes';
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
    <div className="mw9 center ph6 pv4">
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
        <div className="fl w-25 pr2">
          <GBCurrentLive />
        </div>
        <div className="fl w-25 pr2 pl2">
          <GameReleases />
        </div>
        <div className="fl w-25 pl2 pr2">
          <GBUpcoming />
        </div>
        <div className="fl w-25 pl2">
          <UpcomingMusic />
        </div>
      </div>

      <div className="cf">
        <div className="fl w-25 pr2 pl2">
          <GBLatestVideos />
        </div>
        <div className="fl w-25 pl2 pr2">
          <NewsWithFetch
            label="News"
            filter={{ type: 'sources', value: 'reuters' }}
          />
        </div>
        <div className="fl w-25 pl2 pr2">
          <UpcomingBeer />
        </div>
        <div className="fl w-25 pl2 pr2">
          <Stocks symbol="STO:IMMU" />
        </div>
      </div>
      <div className="cf">
        <div className="fl w-third pr2" />
        <div className="fl w-third pr2 pl2" />
        <div className="fl w-third pl2" />
      </div>
    </div>
  );
}
export default App;
