import React from 'react';
import moment from 'moment';

import ListWithFetch from '../../base/list/ListWithFetch';

const GENRE_ID_LIST = ['18'];

export default function UpcomingMusic() {
  return (
    <ListWithFetch
      label="Album Releases"
      url="https://rss.itunes.apple.com/api/v1/us/apple-music/coming-soon/all/100/explicit.json"
      fetchInterval={1000 * 60 * 30}
      transformResponse={response => response.data.feed.results.filter(
        album => album.genres.filter(
          genre => GENRE_ID_LIST.includes(genre.genreId),
        ).length,
      )}
      transformItem={album => ({
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
      )}
    />

  );
}
