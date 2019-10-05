import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';

import List from '../List';

export default function ListDialog({
  list, open, onClose, noImages,
}) {
  return (
    <Dialog
      aria-labelledby="show-all-list-items"
      open={open}
      onClose={onClose}
    >
      <div className="ph4 pv2 bg-near-black">
        <List noImages={noImages} {...list} />
      </div>
    </Dialog>
  );
}

ListDialog.propTypes = {
  list: PropTypes.shape(List.propTypes).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  noImages: PropTypes.bool,
};

ListDialog.defaultProps = {
  noImages: false,
};
