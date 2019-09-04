import React from 'react';
import PropTypes from 'prop-types';


export default function Title({ title, loading, link }) {
  if (loading) {
    return <div className="bg-light-gray h1 w5 mv2" />;
  }

  const textClasses = 'db sans-serif f4 mv2 black';
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
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  link: PropTypes.string,
};

Title.defaultProps = {
  loading: false,
  link: null,
};
