import React from 'react';
import PropTypes from 'prop-types';


export default function Title({ title, loading, link }) {
  if (loading) {
    return <div className="bg-dark-gray h1 w5 mv2" />;
  }

  const textClasses = 'db sans-serif f6 b mv2 near-white';
  if (link) {
    return (
      <a
        href={link}
        className={`${textClasses} link`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    );
  }

  return (
    <span className={textClasses}>
      {title}
    </span>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  link: PropTypes.string,
};

Title.defaultProps = {
  title: '',
  loading: false,
  link: null,
};
