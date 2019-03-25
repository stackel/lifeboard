import React from 'react';
import moment from 'moment';

import GBLatestVideos from './components/dashboard/giant-bomb/GBLatestVideos';
import Gmail from './components/dashboard/gmail/Gmail';
import PhilipsHue from './components/dashboard/philips-hue/PhilipsHue';
import Chromecast from './components/dashboard/chromecast/Chromecast';

function App() {
  return (
    <div className="App">
      <h1 className="sans-serif tc f1">
        {"It's "}
        {moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}
      </h1>
      <div className="cf">
        <div className="w-25 fl ph4 ">
          <GBLatestVideos />
        </div>
        <div className="w-25 fl ph4">
          <Gmail />
        </div>
        <div className="w-25 fl ph4">
          <PhilipsHue />
        </div>
        <div className="w-25 fl ph4">
          <Chromecast />
        </div>
      </div>

    </div>
  );
}

export default App;
