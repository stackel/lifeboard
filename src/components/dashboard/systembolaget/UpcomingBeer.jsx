import React from 'react';
import PropTypes from 'prop-types';
import { Get } from 'react-axios';
import axios from 'axios';
import { CORS_ANYWHERE_URL } from '../../../resources/config/api';

export default function UpcomingBeer(props) {
  const axiosInstance = axios.create({
    headers: { 'Ocp-Apim-Subscription-Key': 'ed6bfcdbf6074559bd67365384159e63' },
  });
  return (
    <Get
      instance={axiosInstance}
      url={`${CORS_ANYWHERE_URL}https://api-extern.systembolaget.se/product/v1/product/search`}
      params={{
        SubCategory: 'Öl',
        SellStartDateFrom: '2019-09-04',
        SellStartDateTo: '2019-12-01',
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
          return <pre>{JSON.stringify(response, null, 4)}</pre>;
        }
        return null;
      }}

    </Get>
  );
}

UpcomingBeer.propTypes = {
};
