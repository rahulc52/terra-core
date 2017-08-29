import React from 'react';
import StatusView from '../../src/StatusView';

describe('StatusView', () => {
  const defaultRender = <StatusView />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.status-view').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class status-view', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('status-view');
  });
});
