import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess'; // TODO
import Icon2 from 'terra-icon/lib/icon/IconAdd';// TODO
import Icon3 from 'terra-icon/lib/icon/IconAddPerson';// TODO
import Icon4 from 'terra-icon/lib/icon/IconAway';// TODO
import Icon5 from 'terra-icon/lib/icon/IconCancel';// TODO
import Icon6 from 'terra-icon/lib/icon/IconAlert';// TODO
import Icon7 from 'terra-icon/lib/icon/IconAbnormal';// TODO
import Icon8 from 'terra-icon/lib/icon/IconError'; // TODO
import 'terra-base/lib/baseStyles';
import styles from './StatusView.scss';

const statusTypes = ['clinical', 'no_data', 'no_result', 'not_authorized', 'sensitive_data', 'error', 'no_internet', 'error_loading', 'custom'];
const cx = classNames.bind(styles);

const iconHeadingMapping = {
  statusTypes: {
    icon: <IconSuccess width="100px" height="100px" />, // TODO
    heading: 'TBD', //TODO
  },
  no_data: {
    icon: <Icon2 width="100px" height="100px" />, // TODO
    heading: 'No Data', // TODO
  },
  no_result: {
    icon: <Icon3 width="100px" height="100px" />, // TODO
    heading: 'No Matching Results', // TODO
  },
  not_authorized: {
    icon: <Icon4 width="100px" height="100px" />, // TODO
    heading: 'Not Authorized', // TODO
  },
  sensitive_data: {
    icon: <Icon5 width="100px" height="100px" />, // TODO
    heading: 'Sensitive Data', // TODO
  },
  error: {
    icon: <Icon6 width="100px" height="100px" />, // TODO
    heading: 'Error', // TODO
  },
  no_internet: {
    icon: <Icon7 width="100px" height="100px" />, // TODO
    heading: 'No Internet Connection', // TODO
  },
  error_loading: {
    icon: <Icon8 width="100px" height="100px" />, // TODO
    heading: 'Error Loading', // TODO
  },
};

const propTypes = {
  /**
    * The status view icon and heading will be decided as per the type value.
    * Type value should be on of 'clinical', 'no_data', 'no_result', 'not_authorized',
    * 'sensitive_data', 'error', 'no_internet', 'error_loading', 'custom'
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
    * Whether or not the Icon should be displayed.
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
  let finalHeading;
  let finalIcon;

  finalHeading = heading;
  finalIcon = icon;

  if (type !== 'custom') {
    finalHeading = iconHeadingMapping[type].heading;
    finalIcon = iconHeadingMapping[type].icon;
  }

  let iconSection;
  if (!isIconHidden) {
    iconSection = <div className={cx('icon')}>{finalIcon}</div>;
  }
  let headingSection;
  if (finalHeading) {
    headingSection = <p className={cx('heading')}>{finalHeading}</p>;
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
