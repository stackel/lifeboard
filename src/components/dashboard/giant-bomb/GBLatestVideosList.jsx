import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';

import GBVideoListItem from './GBVideoListItem';

export default function GBLatestVideosList({ videos }) {
  if (!videos || !videos.length) {
    return null;
  }
  return (
    <div>
      <h2 className="sans-serif f4 mb2">
        {'Latest Giant Bomb Videos'}
      </h2>
      <Carousel
        dragging
        slidesToShow={5}
        swiping
        renderBottomCenterControls={() => null}
        renderCenterRightControls={() => null}
        renderCenterLeftControls={() => null}
      >
        {
        videos.map(
          video => (
            <div key={video.id} className="pr3">
              <GBVideoListItem
                name={video.name}
                publishedAt={video.publish_date}
                imageUrl={video.image.medium_url}
                videoUrl={video.site_detail_url}
              />
            </div>
          ),
        )
      }
      </Carousel>
    </div>
  );
}

GBLatestVideosList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({ ...GBVideoListItem.propTypes }),
  ),
};

GBLatestVideosList.defaultProps = {
  videos: [],
};
