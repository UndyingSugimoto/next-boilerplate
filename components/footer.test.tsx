import { shallow } from 'enzyme';
import React from 'react';
import Footer, { FooterTag } from './footer';
import 'jest-styled-components';

describe('Chart', () => {
  test('レンダリングの確認', () => {
    const wrapper = shallow(<Footer></Footer>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(FooterTag).length).toBe(1);
  });
});
