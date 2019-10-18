import React from 'react';
import PropTypes from 'prop-types';

import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Image from './components/Image';

export default function Item({
  item, showImage, loading, subtitleOverImage,
}) {
  return (
    <div>
      <Image
        textOverlay={subtitleOverImage ? item.subtitle : null}
        url={item.imageUrl}
        alt={item.title}
        show={showImage}
        loading={loading}
      />
      <Title link={item.url} title={item.title} loading={loading} />
      {
        !subtitleOverImage
        && <Subtitle subtitle={item.subtitle} loading={loading} />
      }
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }),
  showImage: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  subtitleOverImage: PropTypes.bool,
};

Item.defaultProps = {
  loading: false,
  item: {},
  subtitleOverImage: false,
};
