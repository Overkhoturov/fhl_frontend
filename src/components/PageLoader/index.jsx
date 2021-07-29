import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import Logo from '../svgComponents/Logo';

const PageLoader = (props) => {
  const { isLoading } = props;

  return (
    <Modal
      isOpen={isLoading}
      appElement={document.querySelector('#root')}
      style={{
        overlay: {
          backgroundColor: 'rgba(28, 34, 68, 0.5)',
          zIndex: 1050,
        },
        content: {
          maxWidth: '630px',
          maxHeight: '375px',
          backgroundColor: 'rgba(28, 34, 68, 0)',
          border: '0',
          margin: 'auto',
        },
      }}
    >
      <Logo width="100%" height="100%" />
    </Modal>
  );
};

PageLoader.propTypes = {
  isLoading: PropTypes.bool,
};

PageLoader.defaultProps = {
  isLoading: true,
};

export default memo(PageLoader);
