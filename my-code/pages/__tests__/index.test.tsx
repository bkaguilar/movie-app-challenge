import React from 'react';
import { mount } from 'enzyme';
import Index from '../index';

describe('index page', () => {
  it('should have a div element', () => {
    const subject = mount(<Index />);

    expect(subject.find('div')).toHaveLength(1);
  });
});
