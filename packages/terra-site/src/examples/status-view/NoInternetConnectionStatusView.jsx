/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StatusView from 'terra-status-view';

const subtextContent = (<p>Buttons or other controls comes here for next action</p>);
const NoInternetConnectionStatusView = () => (
  <div>
    <StatusView
      type="no_internet"
      subtext="Description comes here"
      subtextContent={subtextContent}
    />
  </div>
);

export default NoInternetConnectionStatusView;
