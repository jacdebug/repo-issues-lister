import React from 'react';
import { shallow } from 'enzyme';
import { Issues } from './Issues';

describe('<Issues />', () => {
  it('should render', () => {
    const component = shallow(
      <Issues
        issues={[
          {
            id: 1,
            title: 'issue title test first',
          },
          {
            id: 2,
            title: 'issue title test second',
          },
        ]}
      />
    );

    expect(component).toMatchSnapshot();
    expect(component.find('ul').length).toBe(1);
    expect(component.find('li').length).toBe(2);
  });
});
