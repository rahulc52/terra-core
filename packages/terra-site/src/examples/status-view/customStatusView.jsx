/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StatusView from 'terra-status-view';
import IconClose from 'terra-icon/lib/icon/IconClose';// TODO

const subtextContent = (<p>Buttons or other controls comes here for next action</p>);
const CustomStatusView = () => (
  <div>
    <StatusView
      icon={<IconClose />}
      heading="custom Heading"
      type="custom"
      subtext="Description comes here"
      subtextContent={subtextContent}
    />
  </div>
);

export default CustomStatusView;
