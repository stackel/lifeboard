import React from 'react';
import { Get } from 'react-axios';
import axios from 'axios';
import moment from 'moment';
import List from '../../base/list/List';
// import { CORS_ANYWHERE_URL } from '../../../resources/config/api';

const LABEL = 'Nya Öler';
export default function UpcomingBeer() {
  const axiosInstance = axios.create({
    headers: { 'Ocp-Apim-Subscription-Key': 'ed6bfcdbf6074559bd67365384159e63' },
  });
  return (
    <Get
      instance={axiosInstance}
      url="https://api-extern.systembolaget.se/product/v1/product/search"
      params={{
        SortBy: 'SellStartDate',
        SubCategory: 'Öl',
        SellStartDateFrom: moment().add(1, 'day').format('YYYY-MM-DD'),
        SellStartDateTo: moment().add(30, 'day').format('YYYY-MM-DD'),
      }}
    >
      {(error, response, isLoading) => {
        if (isLoading) {
          return (
            <List
              label={LABEL}
              limitTo={1}
              loading
            />
          );
        }
        if (error) {
          return null;
        }
        if (response) {
          const beers = response.data.Hits;
          if (!beers) {
            return null;
          }

          console.log(beers);

          return (
            <div>
              <List
                label={LABEL}
                items={beers.filter(beer => beer.IsInStoreSearchAssortment.includes('0237')
                || beer.IsInStoreSearchAssortment.includes('0220')
                || beer.IsInStoreSearchAssortment.includes('0167')
                || beer.IsInStoreSearchAssortment.includes('0202')).map(beer => (
                  {
                    title: `${beer.ProductNameBold} ${beer.ProductNameThin || ''}`,
                    subtitle: moment(beer.SellStartDate).fromNow(),
                    url: `https://www.systembolaget.se/dryck/ol/${beer.ProductNameBold.trim()
                      .replace(/\s+/g, '-')
                      .replace(/\u00e4/g, 'a')
                      // Add å and ö
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

    </Get>
  );
}
