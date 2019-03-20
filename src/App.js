import React from 'react';

import GBLatestVideos from './components/dashboard/giant-bomb/GBLatestVideos';

function App() {
  return (
    <div className="App">
      <h1 className="sans-serif tc f1">
         Lifeboard
      </h1>
      <div className="mw6">
        <GBLatestVideos />
      </div>
    </div>
  );
}

export default App;
