import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';

import List from '../List';

export default function ListDialog({
  list, open, onClose, noImages, limitTo,
}) {
  return (
    <Dialog
      aria-labelledby="show-all-list-items"
      open={open}
      onClose={onClose}
    >
      <div className="ph4 pv2 bg-near-black min-w6">
        <List
          limitTo={limitTo}
          noImages={noImages}
          {...list}
        />
      </div>
    </Dialog>
  );
}

ListDialog.propTypes = {
  list: PropTypes.shape(List.propTypes).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  noImages: PropTypes.bool,
  limitTo: PropTypes.number,
};

ListDialog.defaultProps = {
  noImages: false,
  limitTo: 20,
};
