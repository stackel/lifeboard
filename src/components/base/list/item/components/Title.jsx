import React from 'react';
import PropTypes from 'prop-types';


export default function Title({
  title, loading, link, large,
}) {
  if (loading) {
    return <div className="bg-dark-gray h1 w5 mv2" />;
  }

  const textClasses = `${large ? 'f5' : 'f6 fw5'} db sans-serif mv2 near-white`;
  if (link) {
    return (
      <a
        href={link}
        className={`${textClasses} link truncate-two-lines`}
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
  large: PropTypes.bool,
};

Title.defaultProps = {
  title: '',
  loading: false,
  link: null,
  large: false,
};
