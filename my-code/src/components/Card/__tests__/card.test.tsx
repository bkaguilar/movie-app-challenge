import React from 'react';
import { mount } from 'enzyme';
import Card from '../Card';

describe('Card component', () => {
  it('should have a article element', () => {
    const subject = mount(<Card />);

    expect(subject.find('article')).toHaveLength(1);
  });
});
