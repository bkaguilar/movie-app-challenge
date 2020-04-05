import React from 'react';
import { mount } from 'enzyme';
import Button from '../Button';

describe('Button component', () => {
  it('should have a button element', () => {
    const subject = mount(<Button />);

    expect(subject.find('button')).toHaveLength(1);
  });
});
