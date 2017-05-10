import React, { PropTypes } from 'react';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import 'terra-base/lib/baseStyles';
import ModalOverlay from './ModalOverlay';

const propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classNameModal: PropTypes.string,
  classNameOverlay: PropTypes.string,
  closeOnOutsideClick: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  isFullscreen: PropTypes.bool,
  isScrollable: PropTypes.bool,
  role: PropTypes.string,
};

const defaultProps = {
  ariaLabel: null,
  children: null,
  classNameModal: null,
  classNameOverlay: null,
  closeOnOutsideClick: true,
  isFullscreen: false,
  isScrollable: false,
  role: 'dialog',
};

/* eslint-disable react/prefer-stateless-function */
class ModalContent extends React.Component {
  render() {
    const {
        ariaLabel,
        children,
        classNameModal,
        classNameOverlay,
        closeOnOutsideClick,
        onRequestClose,
        role,
        isFullscreen,
        isScrollable,
        ...customProps } = this.props;

    const modalClassName = classNames(['terra-Modal',
      { 'terra-Modal--fullscreen': isFullscreen },
      { 'terra-Modal--scrollable': isScrollable },
      classNameModal,
    ]);

    // Delete the closePortal prop that comes from react-portal.
    delete customProps.closePortal;

    return (
      <FocusTrap>
        <ModalOverlay
          onClick={closeOnOutsideClick ? onRequestClose : null}
          className={classNameOverlay}
        />
        <div
          tabIndex="0"
          aria-label={ariaLabel}
          className={modalClassName}
          role={role}
          {...customProps}
        >
          {children}
        </div>
      </FocusTrap>
    );
  }
}

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
