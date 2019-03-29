import React from 'react';
import { storiesOf } from '@storybook/react';

import { giantBombVideos } from '../../../resources/data/mocked/giant-bomb';
import GBVideoListItem from './GBVideoListItem';

const video = giantBombVideos[0];

storiesOf('Components/Giant Bomb', module)
  .add('GB Video List Item', () => (
    <div className="mw6 pa4">
      <GBVideoListItem
        name={video.name}
        publishedAt={video.publish_date}
        imageUrl={video.image.medium_url}
        videoUrl={video.site_detail_url}
      />
    </div>
  ));
