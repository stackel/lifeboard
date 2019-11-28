import React from 'react';
import moment from 'moment';
import List from '../../base/list/List';

import FetchWithInterval from '../../base/list/FetchWithInterval';

const LABEL = 'Nya Öler';
export default function UpcomingBeer() {
  return (
    <FetchWithInterval
      headers={{ 'Ocp-Apim-Subscription-Key': 'ed6bfcdbf6074559bd67365384159e63' }}
      url="https://api-extern.systembolaget.se/product/v1/product/search"
      params={{
        SubCategory: 'Öl',
        SellStartDateFrom: moment().subtract(2, 'day').format('YYYY-MM-DD'),
        SellStartDateTo: moment().add(14, 'day').format('YYYY-MM-DD'),
      }}
    >
      {(response, loading, error) => {
        if (loading) {
          return (
            <List
              label={LABEL}
              limitTo={1}
              loading
              fetchInterval={1000 * 60 * 5}
            />
          );
        }
        if (error) {
          return null;
        }
        if (response) {
          const beers = response.data.Hits;
          const beersInStore = beers.filter(beer => beer.IsInStoreSearchAssortment
            .includes('0237'));
          if (!beersInStore || !beersInStore.length) {
            return null;
          }
          return (
            <div>
              <List
                label={LABEL}
                noImages
                limitTo={6}
                items={beersInStore.map(beer => (
                  {
                    title: `${beer.ProductNameBold} ${beer.ProductNameThin || ''}`,
                    subtitle: moment(beer.SellStartDate).calendar(null, {
                      lastDay: '[Yesterday]',
                      sameDay: '[Today]',
                      nextDay: '[Tomorrow]',
                      lastWeek: '[last] dddd',
                      nextWeek: 'dddd',
                      sameElse: 'L',
                    }),
                    url: `https://www.systembolaget.se/dryck/ol/${beer.ProductNameBold
                      .trim()
                      .replace(/\s+/g, '-')
                      .replace(/\./g, '')
                      .replace(/\u00e4/g, 'a')
                      .replace(/\u00f6/g, 'o')
                      .replace(/\\|\//g, '')
                      .toLowerCase()}-${beer.ProductNumber}`,
                    imageUrl: 'https://www.systembolaget.se/content/assets/images/products/product-placeholder.png',
                  }
                ))}
              />
            </div>
          );
        }
        return null;
      }}

    </FetchWithInterval>
  );
}
