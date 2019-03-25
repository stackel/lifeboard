import React from 'react';
import { Get } from 'react-axios';
import moment from 'moment';

export default function UpcomingMusic() {
  return (
    <Get
      url="https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/us/apple-music/coming-soon/all/100/explicit.json"
    >
      {(error, response, isLoading) => {
        if (error) {
          return (
            <div>
              {error.message}
            </div>
          );
        }
        if (isLoading) {
          return (<div>Loading...</div>);
        }
        if (response !== null) {
          const albums = response.data.feed.results.filter(
            result => result.genres[0].genreId === '18'
             || result.genres[0].genreId === '10'
             || result.genres[0].genreId === '7',
          ).sort((a, b) => moment(a.releaseDate) - moment(b.releaseDate))
            .filter(album => moment(album.releaseDate) >= moment()).slice(0, 5);
          return (
            <div>
              <h2 className="sans-serif f3"> Upcoming Album Releases</h2>
              {albums.map(album => (
                <div className="mb4" key={album.name}>
                  <img className="br2" src={album.artworkUrl100} alt="Album art" />
                  <span className="db sans-serif f5 dark-gray">{album.artistName}</span>
                  <span className="db sans-serif f4 mv1">{album.name}</span>
                  <span className="db sans-serif f6">{moment(album.releaseDate).fromNow()}</span>
                </div>
              ))}
            </div>
          );
        }
        return null;
      }
    }
    </Get>
  );
}
