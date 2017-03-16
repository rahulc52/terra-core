/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
import AnimatedResponsiveElement from './AnimatedResponsiveElement';
import Responsive from './Responsive';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ResponsiveElementSrc from '!raw-loader!../src/ResponsiveElement.jsx';

const ResponsiveElementExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ResponsiveElementSrc} />
    <h2>Responsive to Parent</h2>
    <AnimatedResponsiveElement />
    <Responsive />
    <h2>Responsive to Window</h2>
    <AnimatedResponsiveElement responsiveTo="window" />
    <Responsive responsiveTo="window" />
  </div>
);

export default ResponsiveElementExamples;