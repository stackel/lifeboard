import React from 'react';
import { Get } from 'react-axios';
import moment from 'moment';

import List from '../../base/list/List';

const GENRE_ID_LIST = ['18'];

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
            album => album.genres.filter(
              genre => GENRE_ID_LIST.includes(genre.genreId),
            ).length,
          );

          return (
            <>
              <List
                label="Album releases"
                items={
              albums.map(
                album => ({
                  title: `${album.artistName} - ${album.name}`,
                  subtitle: moment(album.releaseDate).fromNow(),
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
