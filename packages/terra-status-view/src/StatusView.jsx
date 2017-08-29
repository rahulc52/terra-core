import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './StatusView.scss';

const cx = classNames.bind(styles);

const propTypes = {
 /*
 * Content to be displayed as the name
 */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const StatusView = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const StatusViewClassNames = cx([
    'status-view',
    attributes.className,
  ]);

  return (<div {...attributes} className={StatusViewClassNames} />)
};

StatusView.propTypes = propTypes;
StatusView.defaultProps = defaultProps;

export default StatusView;
