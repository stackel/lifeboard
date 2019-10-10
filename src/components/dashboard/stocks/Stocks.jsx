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
        fetchInterval: '1000 * 60 * 10',
      }}
    >
      {(response, loading, error) => {
        if (error) {
          return null;
        }
        if (loading) {
          return (
            <h2 className="near-white sans-serif f3 mb3">
                      Stocks
            </h2>
          );
        }
        const data = response.data['Time Series (Daily)'];
        if (!data) {
          return null;
        }

        const dataWithDates = [];
        Object.keys(data).forEach((key) => {
          dataWithDates.push({ ...data[key], date: moment(key) });
        });

        const sortedDataWithDates = dataWithDates.sort((a, b) => a.date + b.date);

        const latestValue = sortedDataWithDates[0];
        const nextToLatestValue = sortedDataWithDates[1];
        if (!latestValue || !nextToLatestValue) {
          return null;
        }

        const latestClose = Math.round(latestValue['4. close'] * 100) / 100;
        const nextToLatestClose = Math.round(nextToLatestValue['4. close'] * 100) / 100;

        return (
          <div className="">
            <h2 className="near-white sans-serif f3 mb3">
            Stocks
            </h2>
            <h2 className="sans-serif f6 light-silver mb3">
              {`Updated ${moment().format('HH:mm')}`}
            </h2>
            <div className="sans-serif light-silver tc f3 mt5">
              {symbol}
            </div>
            <div className=" tc f1 near-white sans-serif mv3 b">
              {latestClose.toFixed(2)}
            </div>
            {
              latestClose > nextToLatestClose
                ? (
                  <div className="tc sans-serif f3 green">
                    {`${Math.abs((((nextToLatestClose / latestClose) - 1) * 100)
                      .toFixed(1))}%`}
                    <span> &#8599; </span>
                  </div>
                )
                : (
                  <div className="tc sans-serif f3 red">
                    {`${Math.abs((((nextToLatestClose / latestClose) - 1) * 100)
                      .toFixed(1))}%`}
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
