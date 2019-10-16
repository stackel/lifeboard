import React from 'react';
import GBLatestVideos from './components/dashboard/giant-bomb/LatestVideos';
import GBCurrentLive from './components/dashboard/giant-bomb/LiveShows';
import UpcomingMusic from './components/dashboard/upcoming-music/UpcomingMusic';
import GameReleases from './components/dashboard/giant-bomb/GameReleases';
import Recipes from './components/dashboard/recipes/Recipes';
import Standings from './components/dashboard/allsvenskan/Standings';
import Time from './components/dashboard/time/Time';
import Weather from './components/dashboard/weather/Weather';
import PhilipsHue from './components/dashboard/philips-hue/PhilipsHue';
import News from './components/dashboard/news/News';
import GBUpcoming from './components/dashboard/giant-bomb/UpcomingVideos';
import UpcomingBeer from './components/dashboard/systembolaget/UpcomingBeer';
import Stocks from './components/dashboard/stocks/Stocks';
import SunriseSunset from './components/dashboard/sunrise-sunset/SunriseSunset';
import Podcasts from './components/dashboard/podcasts/Podcasts';

const components = [
  <GBCurrentLive />,
  <GameReleases />,
  <GBUpcoming />,
  <UpcomingMusic />,
  <News
    label="News"
    filter={{ type: 'sources', value: 'reuters' }}
  />,
  <GBLatestVideos />,
  <Stocks
    symbol="STO:IMMU"
    nStocks={815}
    invested={10492}
  />,
  <UpcomingBeer />,
  <Standings />,
  <Recipes />,
  <Podcasts />,
];

const componentWidth = 'w-20';
const componentPadding = 'ph2';

function App() {
  return (
    <div className="bg-near-black mh3">

      <div className="cf fl w-15 pt5">
        <div className="tc">
          <Time />
          <div className="mv4">
            <SunriseSunset lat={59.305377} lng={18.145041} />
          </div>
          <Weather />
        </div>
        <div className="pt4 tc">
          <PhilipsHue />
        </div>
      </div>

      <div className="fl w-85 cf">
        {
        components.map(component => (
          <div className={`${componentWidth} ${componentPadding} fl`}>
            {component}
          </div>
        ))
      }
      </div>
    </div>
  );
}
export default App;
