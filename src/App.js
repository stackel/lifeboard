import React from 'react';
import GBLatestVideos from './components/dashboard/giant-bomb/LatestVideos/LatestVideos';
import NewMusic from './components/dashboard/upcoming-music/NewMusic';
import GameReleases from './components/dashboard/game-releases/GameReleases';
import Recipes from './components/dashboard/recipes/Recipes';
import RecipesBA from './components/dashboard/recipes/RecipesBA';
import Standings from './components/dashboard/allsvenskan/Standings';
import StandingsBandy from './components/dashboard/elitserien-bandy/Standings';
import Time from './components/dashboard/time/Time';
import Weather from './components/dashboard/weather/Weather';
import News from './components/dashboard/news/News';
import GBUpcoming from './components/dashboard/giant-bomb/UpcomingVideos/UpcomingVideos';
import UpcomingBeer from './components/dashboard/systembolaget/UpcomingBeer';
import Stocks from './components/dashboard/stocks/Stocks';
import SunriseSunset from './components/dashboard/sunrise-sunset/SunriseSunset';
import Podcasts from './components/dashboard/podcasts/Podcasts';
import XboxNews from './components/dashboard/xbox-wire/News';

const components = [
  <div className="tc pa4 mt4">
    <Time />
    <div className="mv4">
      <SunriseSunset lat={59.305377} lng={18.145041} />
    </div>
    <Weather />
  </div>,
  <GBUpcoming />,
  <GameReleases />,
  <NewMusic />,
  <News
    label="News"
    filter={{ type: 'sources', value: 'reuters' }}
  />,
  <XboxNews />,
  <GBLatestVideos />,
  <Stocks
    stocks={[{
      symbol: 'IMMU.ST',
      acquiredAt: 11.55,
    }, {
      symbol: 'TEL2-B.ST',
      acquiredAt: 123.45,
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
const componentPadding = 'ph3';

function App() {
  return (
    <div className="bg-near-black pv2 ph4">
      <div className="fl w-100 cf">
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
