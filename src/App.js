import React from 'react';
import GBLatestVideos from './components/dashboard/giant-bomb/LatestVideos/LatestVideos';
import UpcomingMusic from './components/dashboard/upcoming-music/UpcomingMusic';
import GameReleases from './components/dashboard/game-releases/GameReleases';
import Recipes from './components/dashboard/recipes/Recipes';
import RecipesBA from './components/dashboard/recipes/RecipesBA';
import Standings from './components/dashboard/allsvenskan/Standings';
import StandingsBandy from './components/dashboard/elitserien-bandy/Standings';
import Time from './components/dashboard/time/Time';
import Weather from './components/dashboard/weather/Weather';
import PhilipsHue from './components/dashboard/philips-hue/PhilipsHue';
import News from './components/dashboard/news/News';
import GBUpcoming from './components/dashboard/giant-bomb/UpcomingVideos/UpcomingVideos';
import UpcomingBeer from './components/dashboard/systembolaget/UpcomingBeer';
import Stocks from './components/dashboard/stocks/Stocks';
import SunriseSunset from './components/dashboard/sunrise-sunset/SunriseSunset';
import Podcasts from './components/dashboard/podcasts/Podcasts';
import XboxNews from './components/dashboard/xbox-wire/News';

const components = [
  <GBUpcoming />,
  <GameReleases />,
  <UpcomingMusic />,
  <News
    label="News"
    filter={{ type: 'sources', value: 'reuters' }}
  />,
  <XboxNews />,
  <GBLatestVideos />,
  <Stocks
    stocks={[{
      symbol: 'STO:IMMU',
      acquiredAt: 12.87,
    }, {
      symbol: 'STO:SOLT',
      acquiredAt: 20.50,
    }, {
      symbol: 'STO:EOLU-B',
      acquiredAt: 123.00,
    }]}
  />,
  <Recipes />,
  <RecipesBA />,
  <Standings />,
  <StandingsBandy />,
  <UpcomingBeer />,
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
          <div className={`${componentWidth} ${componentPadding} fl min-h6 `}>
            {component}
          </div>
        ))
      }
      </div>
    </div>
  );
}
export default App;
