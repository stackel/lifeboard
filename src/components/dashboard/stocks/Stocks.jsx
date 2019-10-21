import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import FetchWithInterval from '../../base/list/FetchWithInterval';

const LABEL = 'Stocks';
const API_KEY = 'GIUYQBXKZDY2VNT7';

export default function Stocks({ stocks, mocked }) {
  return (
    <div>
      <h2 className="near-white sans-serif f4 mb2">
        {LABEL}
      </h2>
      <h2 className="sans-serif f7 light-silver fw5 mb3">
        {`Updated ${moment().format('HH:mm')}`}
      </h2>
      {stocks.map((stock, index) => (
        <FetchWithInterval
          mocked={mocked ? mocked[index] : null}
          url="https://www.alphavantage.co/query"
          params={{
            outputsize: 'compact',
            apikey: API_KEY,
            symbol: stock.symbol,
            function: 'TIME_SERIES_DAILY',
            fetchInterval: '1000 * 60 * 5',
          }}
        >
          {(response, loading, error) => {
            if (error || loading) {
              return null;
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
            const latestCloseRounded = latestClose.toFixed(2);
            const isValueIncreasedSinceYesterday = latestClose > nextToLatestClose;
            const percentageDiffSinceYesterday = (((latestClose / nextToLatestClose) - 1) * 100)
              .toFixed(1);
            const percentageDiffSinceAcquired = (
              ((latestClose / stock.acquiredAt) - 1) * 100).toFixed(1);

            if (index === 0) {
              return (
                <div className="tc mb4">
                  <div className="sans-serif light-silver tc f4 mt4">
                    {stock.symbol}
                  </div>
                  <div className="f2 near-white sans-serif mv2 b">
                    {`${latestCloseRounded} kr`}
                  </div>
                  <div className={`sans-serif f4 dib ${isValueIncreasedSinceYesterday ? 'green' : 'red'}`}>
                    {`${percentageDiffSinceYesterday}%`}
                  </div>
                  <span className="white sans-serif f7 lh-copy pl2 mt2">
                    {`(${percentageDiffSinceAcquired}%)`}
                  </span>
                )
                </div>
              );
            }
            return (
              <div className="f mv2">
                <div className="f5 mt2 mb1">
                  <span className="sans-serif light-silver">
                    {stock.symbol}
                  </span>
                  <span className="near-white sans-serif b fr">
                    {`${latestCloseRounded} kr`}
                  </span>
                </div>
                <div className="tr f6">
                  <span className={`mr2 sans-serif ${isValueIncreasedSinceYesterday ? 'green' : 'red'}`}>
                    {`${percentageDiffSinceYesterday}%`}
                  </span>
                  <span className="white sans-serif f7">
                    {`(${percentageDiffSinceAcquired}%)`}
                  </span>
                </div>
                )
              </div>
            );
          }}
        </FetchWithInterval>
      ))}
    </div>
  );
}

Stocks.propTypes = {
  stocks: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string,
      boughtAt: PropTypes.number,
    }),
  ),
};

Stocks.defaultProps = {
  stocks: [],
};
