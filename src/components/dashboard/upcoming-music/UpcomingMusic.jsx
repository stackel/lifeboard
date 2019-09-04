import React from 'react';
import { Get } from 'react-axios';
import moment from 'moment';

import List from '../../base/list/List';

export default function UpcomingMusic() {
  return (
    <Get
      url="https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/us/apple-music/coming-soon/all/100/explicit.json"
    >
      {(error, response, isLoading) => {
        if (error) {
          return null;
        }
        if (isLoading) {
          return (<List label="Album releases" loading />);
        }
        if (response !== null) {
          const albums = response.data.feed.results.filter(
            result => result.genres[0].genreId === '18',
          ).sort((a, b) => moment(a.releaseDate) - moment(b.releaseDate))
            .filter(album => moment(album.releaseDate) >= moment());

          return (
            <>
              <List
                label="Album releases"
                items={
              albums.map(
                album => ({
                  title: `${album.artistName} ${album.name}`,
                  subtitle: album.releaseDate,
                  imageUrl: album.artworkUrl100,
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
    </Get>
  );
}
