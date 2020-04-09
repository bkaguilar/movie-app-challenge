import React from 'react';
import { mount } from 'enzyme';
import Spinner from '../Spinner';

describe('Spinner component', () => {
  it('should have a div component', () => {
    const subject = mount(<Spinner />);

    expect(subject.find('div')).toHaveLength(1);
  });
});
