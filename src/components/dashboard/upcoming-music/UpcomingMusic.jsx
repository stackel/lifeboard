import React from 'react';
import moment from 'moment';

import FetchWithInterval from '../../base/list/FetchWithInterval';
import List from '../../base/list/List';

const GENRE_ID_LIST = ['18'];
const LABEL = 'Album Releases';

export default function UpcomingMusic() {
  return (
    <FetchWithInterval
      url="https://rss.itunes.apple.com/api/v1/us/apple-music/coming-soon/all/100/explicit.json"
      corsAnywhere
      fetchInterval={1000 * 60 * 30}
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
                  subtitle: moment(album.releaseDate).fromNow(),
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
