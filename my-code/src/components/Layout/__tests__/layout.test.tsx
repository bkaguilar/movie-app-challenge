import React from 'react';
import { mount } from 'enzyme';
import Layout from '../Layout';

describe('Layout component', () => {
  it('should have a Header component', () => {
    const subject = mount(<Layout />);

    expect(subject.find('Header')).toHaveLength(1);
  });
});
