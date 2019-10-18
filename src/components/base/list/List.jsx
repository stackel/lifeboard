import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import moment from 'moment';

import Item from './item/Item';
/* eslint-disable import/no-cycle */
import Dialog from './dialog/Dialog';

export default function List({
  items, loading, limitTo, label, noImages, firstItemSubtitleOnImage,
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  function dialogOpenClicked() {
    setDialogOpen(true);
  }
  function dialogCloseClicked() {
    setDialogOpen(false);
  }

  if (loading) {
    return (
      <div>
        <h2 className="near-white sans-serif f4 mb3">
          {label}
        </h2>
        {[...Array(limitTo).keys()]
          .map(i => (
            <div className="mb4" key={i}>
              <Item
                loading={loading}
                showImage={i < 1 && !noImages}
              />
            </div>
          ))}
      </div>
    );
  }

  return (
    <div>
      <h2 className="near-white sans-serif f5 mb2">
        {label}
      </h2>
      <h2 className="sans-serif f7 light-silver fw5 mb3">
        {`Updated ${moment().format('HH:mm')}`}
      </h2>
      {
        items
          .slice(0, limitTo)
          .map((item, i) => (
            <div className="mb3" key={item.title}>
              <Item
                key={item.title}
                item={item}
                showImage={i < 1 && !noImages}
                subtitleOverImage={i < 1 && firstItemSubtitleOnImage}
              />
            </div>
          ))
      }
      {
        items.length > limitTo
        && (
        <Button
          size="small"
          color="primary"
          onClick={dialogOpenClicked}
        >
          Show more...
        </Button>
        )
    }
      <Dialog
        list={{
          items, loading, label,
        }}
        noImages={noImages}
        open={dialogOpen}
        onClose={dialogCloseClicked}
      />
    </div>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(Item.propTypes.item),
  loading: PropTypes.bool,
  limitTo: PropTypes.number,
  label: PropTypes.string,
  noImages: PropTypes.bool,
  firstItemSubtitleOnImage: PropTypes.bool,
};

List.defaultProps = {
  loading: false,
  items: [],
  limitTo: 3,
  label: '',
  noImages: false,
  firstItemSubtitleOnImage: false,
};
