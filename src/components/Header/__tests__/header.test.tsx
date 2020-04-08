import React from 'react';
import { mount } from 'enzyme';
import Header from '../Header';

describe('Header component', () => {
  it('should have a Figure and input element', () => {
    const subject = mount(<Header />);

    expect(subject.find('figure')).toHaveLength(1);
    expect(subject.find('input')).toHaveLength(1);
  });
});
