import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import Item from './item/Item';
/* eslint-disable import/no-cycle */
import Dialog from './dialog/Dialog';

export default function List({
  items, loading, limitTo, label,
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
        <h2 className="sans-serif f4 mb3">
          {label}
        </h2>
        {[...Array(limitTo).keys()]
          .map(i => (
            <div className="mb4" key={i}>
              <Item
                loading={loading}
                showImage={i < 1}
              />
            </div>
          ))}
      </div>
    );
  }

  return (
    <div>
      <h2 className="sans-serif f4 mb3">
        {label}
      </h2>
      {
        items
          .slice(0, limitTo)
          .map((item, i) => (
            <div className="mb3" key={item.title}>
              <Item
                key={item.title}
                item={item}
                showImage={i < 1}
              />
            </div>
          ))
      }
      {
        items.length > limitTo
        && (
        <Button
          color="primary"
          onClick={dialogOpenClicked}
        >
          Show more...
        </Button>
        )
    }
      <Dialog
        list={{
          items, loading, limitTo: 100, label,
        }}
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
};

List.defaultProps = {
  loading: false,
  items: [],
  limitTo: 3,
  label: '',
};
