/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-status-view/docs/README.md';
import { version } from 'terra-status-view/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import StatusViewSrc from '!raw-loader!terra-status-view/src/StatusView';

// Example Files
import NoDataStatusView from './NoDataStatusView';
import ClinicalStatusView from './ClinicalStatusView';
import NoResultStatusView from './NoResultStatusView';
import NotAuthorizedStatusView from './NotAuthorizedStatusView';
import SensitiveDataStatusView from './SensitiveDataStatusView';
import ErrorStatusView from './ErrorStatusView';
import NoInternetConnectionStatusView from './NoInternetConnectionStatusView';
import ErrorLoadingStatusView from './ErrorLoadingStatusView';
import CustomStatusView from './CustomStatusView';

const StatusViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={StatusViewSrc} />
    <h2 id="clinical">type - clinical</h2>
    <ClinicalStatusView />
    <h2 id="no_data">type - no_data</h2>
    <NoDataStatusView />
    <h2 id="no_result">type - no_result</h2>
    <NoResultStatusView />
    <h2 id="not_authorized">type - not_authorized</h2>
    <NotAuthorizedStatusView />
    <h2 id="sensitive_data">type - sensitive_data</h2>
    <SensitiveDataStatusView />
    <h2 id="error">type - error</h2>
    <ErrorStatusView />
    <h2 id="no_internet">type - no_internet</h2>
    <NoInternetConnectionStatusView />
    <h2 id="error_loading">type - error_loading</h2>
    <ErrorLoadingStatusView />
    <h2 id="custom">type - custom</h2>
    <CustomStatusView />
  </div>
);

export default StatusViewExamples;
