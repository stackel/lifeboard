import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import FetchWithInterval from '../../base/list/FetchWithInterval';

const API_KEY = 'GIUYQBXKZDY2VNT7';
export default function Stocks({ symbol }) {
  return (
    <FetchWithInterval
      url="https://www.alphavantage.co/query"
      params={{
        outputsize: 'compact',
        apikey: API_KEY,
        symbol,
        function: 'TIME_SERIES_DAILY',
      }}
    >
      {(response, loading, error) => {
        if (error) {
          return null;
        }
        if (loading) {
          return <p>loading</p>;
        }
        const data = response.data['Time Series (Daily)'];
        if (!data) {
          return null;
        }
        const today = data[moment().format('YYYY-MM-DD')];
        const yesterday = data[moment().subtract(1, 'days').format('YYYY-MM-DD')];
        const todayClose = today['4. close'];
        const yesterdayClose = yesterday['4. close'];
        return (
          <div className="">
            <h2 className="sans-serif f4 mb3">
            Stocks
            </h2>
            <div className="sans-serif tc f3 mt5">
              {symbol}
            </div>
            <div className=" tc f1 sans-serif mv3 b">
              {`${Math.round(todayClose * 100) / 100} kr`}
            </div>
            {
              todayClose > yesterdayClose
                ? (
                  <div className="tc sans-serif f3 dark-green">
                    {`Up ${(((todayClose / yesterdayClose) - 1) * 100).toFixed(1)}%`}
                    <span> &#8599; </span>
                  </div>
                )
                : (
                  <div className="tc sans-serif f3 dark-red">
                    {`Down ${(((yesterdayClose / todayClose) - 1) * 100).toFixed(1)}%`}
                    <span> &#8601; </span>
                  </div>
                )
            }
          </div>
        );
      }}
    </FetchWithInterval>
  );
}

Stocks.propTypes = {
  symbol: PropTypes.string.isRequired,
};
