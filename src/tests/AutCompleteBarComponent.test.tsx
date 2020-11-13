import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
//import configureStore from 'redux-mock-store'; // Smart components

import {AutoCompleteBar} from '../components/AutoCompleteBar';

describe ('<AutoCompleteBar />', () =>{
    test('renders AutoCompleteBar', () =>{
        const wrapper = shallow(<AutoCompleteBar/>);
        const component = wrapper.dive();

        expect(toJson(component)).toMatchSnapshot();
    });
});