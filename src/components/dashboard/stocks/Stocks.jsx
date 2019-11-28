import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import FetchWithInterval from '../../base/list/FetchWithInterval';

const LABEL = 'Stocks';
const API_KEY = '5hXVnlMTbELftNldno6Qwkf7azoZckh4mQ3sunljDC4vR16hIjAGjN0Ks5LJ';
const URL = 'https://api.worldtradingdata.com/api/v1/stock';

export default function Stocks({ stocks, mocked }) {
  return (
    <FetchWithInterval
      mocked={mocked}
      url={URL}
      params={{
        api_token: API_KEY,
        symbol: stocks.map(stock => stock.symbol).join(','),
      }}
      fetchInterval={1000 * 60 * 3}
    >
      {(response, loading, error) => {
        if (error || loading) {
          return null;
        }

        if (!response || !response.data || !response.data.data) {
          return null;
        }
        const { data } = response.data;

        data.forEach((item, i) => {
          if (item.symbol === 'IMMU.ST') {
            data.splice(i, 1);
            data.unshift(item);
          }
        });

        return data.map((stock, index) => {
          const currentPrice = stock.price;
          const stockCurrency = stock.currency;
          const dayChange = stock.day_change;
          const dayChangePercent = stock.change_pct;

          const { acquiredAt } = stocks.filter(s => stock.symbol === s.symbol)[0];
          const changeSinceAcquired = (
            ((stock.price / acquiredAt) - 1) * 100).toFixed(1);

          if (index === 0) {
            return (
              <div>
                <h2 className="near-white sans-serif f5 mb2">
                  {LABEL}
                </h2>
                <h2 className="sans-serif f7 light-silver fw5 mb3">
                  {`Updated ${moment().format('HH:mm')}`}
                </h2>
                <div className="tc mb4">
                  <div className="sans-serif light-silver tc f4 mt4 pt3 pb2">
                    {stock.name}
                  </div>
                  <div className="f2 near-white sans-serif mv2 b">
                    {`${currentPrice} ${stockCurrency}`}
                  </div>
                  <div className={`sans-serif f4 dib ${dayChange > 0 ? 'green' : 'red'}`}>
                    {`${dayChangePercent}%`}
                  </div>
                  {
                    <span className=" white sans-serif f7 lh-copy pl2 mt2">
                      {`(${changeSinceAcquired}%)`}
                    </span>
                  }
                  )
                </div>
              </div>
            );
          }
          return (
            <div className="f mv3">
              <div className="f5 mt2 mb3">
                <span className="sans-serif light-silver">
                  {stock.name}
                </span>
                <span className="near-white sans-serif b fr">
                  {`${currentPrice} ${stockCurrency}`}
                </span>
              </div>
              <div className="tr f6">
                <span className={`mr2 sans-serif ${dayChange > 0 ? 'green' : 'red'}`}>
                  {`${dayChangePercent}%`}
                </span>
                {
                  <span className="white sans-serif f7">
                    {`(${changeSinceAcquired}%)`}
                  </span>
                }
              </div>
            </div>
          );
        });
      }}
    </FetchWithInterval>
  );
}

Stocks.propTypes = {
  stocks: PropTypes.string,
};

Stocks.defaultProps = {
  stocks: [],
};
