import React from 'react';
import PropTypes from 'prop-types';


export default function Subtitle({ subtitle, loading }) {
  if (loading) {
    return <div className="bg-dark-gray h1 w4 mv2" />;
  }
  return (
    <span className="db sans-serif f5 light-silver truncate">
      {subtitle}
    </span>
  );
}

Subtitle.propTypes = {
  subtitle: PropTypes.string,
  loading: PropTypes.bool,
};

Subtitle.defaultProps = {
  loading: false,
  subtitle: '',
};
