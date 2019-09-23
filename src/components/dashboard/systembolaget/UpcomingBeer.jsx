import React from 'react';
import { Get } from 'react-axios';
import axios from 'axios';
import moment from 'moment';
import List from '../../base/list/List';
// import { CORS_ANYWHERE_URL } from '../../../resources/config/api';

export default function UpcomingBeer() {
  const axiosInstance = axios.create({
    headers: { 'Ocp-Apim-Subscription-Key': 'ed6bfcdbf6074559bd67365384159e63' },
  });
  return (
    <Get
      instance={axiosInstance}
      url="https://api-extern.systembolaget.se/product/v1/product/search"
      params={{
        SubCategory: 'Öl',
        SellStartDateFrom: '2019-09-22',
        SellStartDateTo: '2019-10-22',
      }}
    >
      {(error, response, isLoading) => {
        if (isLoading) {
          return <div> is loading </div>;
        }
        if (error) {
          return (
            <pre>
              {JSON.stringify(error, null, 4)}
            </pre>
          );
        }
        if (response) {
          const beers = response.data.Hits;
          if (!beers) {
            return null;
          }

          return (
            <div>
              <List
                label="Giant Bomb upcoming"
                items={beers.map(beer => (
                  {
                    title: `${beer.ProductNameBold} - ${beer.ProductNameThin}`,
                    subtitle: moment().fromNow(),
                    imageUrl: '',
                    url: '',
                  }
                ))}
              />
              <pre>{JSON.stringify(beers, null, 4)}</pre>
            </div>
          );
        }
        return null;
      }}

    </Get>
  );
}
