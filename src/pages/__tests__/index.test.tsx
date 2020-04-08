import React from 'react';
import { mount } from 'enzyme';
import Index from '../index';

describe('index page', () => {
  it('should have a Layout component', () => {
    const subject = mount(<Index />);

    expect(subject.find('Layout')).toHaveLength(1);
  });
});
