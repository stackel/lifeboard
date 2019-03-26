import React from 'react';
import { Get } from 'react-axios';
import moment from 'moment';
import Carousel from 'nuka-carousel';

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
            .filter(album => moment(album.releaseDate) >= moment());
          return (
            <div>
              <h2 className="sans-serif f4 mb2"> Upcoming Album Releases</h2>
              <Carousel
                dragging
                slidesToShow={5}
                swiping
                heightMode="max"
                renderBottomCenterControls={() => null}
              >
                {albums.map(album => (
                  <div className="pr3" key={album.name}>
                    <img className="br2 h-100" src={album.artworkUrl100} alt="Album art" />
                    <span className="db sans-serif f6 dark-gray mb0 mt2">{album.artistName}</span>
                    <span className="db sans-serif f5 mv2 b">{album.name}</span>
                    <span className="db sans-serif f6">{moment(album.releaseDate).fromNow()}</span>
                  </div>
                ))}
              </Carousel>
            </div>
          );
        }
        return null;
      }
    }
    </Get>
  );
}
