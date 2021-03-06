import React from 'react';
import moment from 'moment';

import ListWithFetch from '../../base/list/ListWithFetch';

const GENRE_ID_LIST = ['18'];

/* eslint-disable react/prop-types */
export default function NewMusic() {
  return (
    <ListWithFetch
      label="New Music"
      url="https://rss.itunes.apple.com/api/v1/us/itunes-music/new-music/all/100/explicit.json"
      fetchInterval={1000 * 60 * 30}
      transformResponse={response => response.data.feed.results.filter(
        album => album.genres.filter(
          genre => GENRE_ID_LIST.includes(genre.genreId),
        ).length
        && moment(album.releaseDate) > moment().subtract(3, 'days'),
      )}
      transformItem={album => ({
        title: `${album.artistName} - ${album.name}`,
        subtitle: moment(album.releaseDate).calendar(),
        imageUrl: album.artworkUrl100,
        url: album.url,
      }
      )}
    />

  );
}
