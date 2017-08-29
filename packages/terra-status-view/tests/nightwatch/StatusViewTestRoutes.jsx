/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import StatusViewTests from './StatusViewTests';

// Test Cases
import DefaultStatusView from './DefaultStatusView';

const routes = (
  <div>
    <Route path="/tests/status-view-tests" component={StatusViewTests} />
    <Route path="/tests/status-view-tests/default" component={DefaultStatusView} />
  </div>
);

export default routes;
