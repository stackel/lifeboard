import React from 'react';
import moment from 'moment';

import FetchWithInterval from '../../base/list/FetchWithInterval';
import List from '../../base/list/List';

const LABEL = 'Album Releases';
const URL = 'https://rss.itunes.apple.com/api/v1/us/apple-music/coming-soon/all/100/explicit.json';
const GENRE_ID_LIST = ['18'];
const FETCH_INTERVAL = 1000 * 60 * 30;

export default function UpcomingMusic() {
  return (
    <FetchWithInterval
      url={URL}
      fetchInterval={FETCH_INTERVAL}
    >
      {(response, loading, error) => {
        if (error) {
          return null;
        }
        if (loading) {
          return (<List label={LABEL} loading />);
        }
        if (response !== null) {
          const albums = response.data.feed.results.filter(
            album => album.genres.filter(
              genre => GENRE_ID_LIST.includes(genre.genreId),
            ).length,
          );

          return (
            <>
              <List
                label={LABEL}
                items={
              albums.map(
                album => ({
                  title: `${album.artistName} - ${album.name}`,
                  subtitle: moment(album.releaseDate).calendar(null, {
                    lastDay: '[Yesterday]',
                    sameDay: '[Today]',
                    nextDay: '[Tomorrow]',
                    lastWeek: '[last] dddd',
                    nextWeek: 'dddd',
                    sameElse: 'd MMMM',
                  }),
                  imageUrl: album.artworkUrl100,
                  url: `https://www.google.com/search?q=${album.artistName} ${album.name}`,
                }
                ),
              )}
              />
            </>
          );
        }
        return null;
      }
    }
    </FetchWithInterval>
  );
}
