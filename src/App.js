import React from 'react';
import GBLatestVideos from './components/dashboard/giant-bomb/GBLatestVideos';
import Gmail from './components/dashboard/gmail/Gmail';
import PhilipsHue from './components/dashboard/philips-hue/PhilipsHue';

function App() {
  return (
    <div className="App">
      <h1 className="sans-serif tc f1">
         Lifeboard
      </h1>
      <div className="cf">
        <div className="w-third fl ph4 ">
          <GBLatestVideos />
        </div>
        <div className="w-third fl ph4">
          <Gmail />
        </div>
        <div className="w-third fl ph4">
          <PhilipsHue />
        </div>
      </div>

    </div>
  );
}

export default App;
