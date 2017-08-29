import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './StatusView.scss';

const cx = classNames.bind(styles);

const statusTypes = ['clinical', 'no_data', 'no_result', 'not_authorised', 'sensitive_data', 'error', 'no_internet', 'error_loading', 'custom'];

const propTypes = {
  /**
    * The status view icon and heading will be decided as per the type value.
    */
  type: PropTypes.oneOf(statusTypes).isRequired,
  /**
    * The status view icon.
    */
  icon: PropTypes.element,
  /**
    * The title of the status view.
    */
  heading: PropTypes.string,
   /**
    * The subtext description of the status view.
    */
  subtext: PropTypes.string,
   /**
    * The element to be dispaly in the subtext content container.
    */
  subtextContent: PropTypes.element,
   /**
    * Whether or not the no Icon should be displayed.
    */
  isIconHidden: PropTypes.bool,
};

const defaultProps = {
  icon: undefined,
  heading: undefined,
  subtext: undefined,
  subtextContent: undefined,
  isIconHidden: false,
};

const StatusView = ({
  type,
  icon,
  heading,
  subtext,
  subtextContent,
  isIconHidden,
  ...customProps }) => {
  let iconSection;
  if (!isIconHidden) {
    iconSection = <div className={cx('icon')}>{icon}</div>;
  }
  let headingSection;
  if (heading) {
    headingSection = <p className={cx('heading')}>{heading}</p>;
  }

  let subtextSection;
  if (subtext) {
    subtextSection = <p className={cx('subtext')}>{subtext}</p>;
  }

  let subtextContentSection;
  if (subtextContent) {
    subtextContentSection = (<div className={cx('subtext-content')}>{subtextContent}</div>);
  }

  let divider;
  if (subtextContent) {
    divider = (<hr className={cx('divider')} style={{ margin: -1 }} />);
  }

  const attributes = Object.assign({}, customProps);
  const StatusViewClassNames = cx([
    'status-view',
    attributes.className,
  ]);

  return (
    <div {...customProps} className={StatusViewClassNames}>
      {iconSection}
      {headingSection}
      {subtextSection}
      {divider}
      {subtextContentSection}
    </div>
  );
};

StatusView.propTypes = propTypes;
StatusView.defaultProps = defaultProps;

export default StatusView;
