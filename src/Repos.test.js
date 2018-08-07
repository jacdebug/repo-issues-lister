import React from 'react';
import { shallow } from 'enzyme';
import { Repos } from './Repos';
import Issues from './Issues';

const noop = () => {};
const repos = () => [
  {
    id: 1,
    name: 'repo one name',
  },
  {
    id: 2,
    name: 'repo two name',
  },
];

describe('<Repos />', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Repos repos={repos()} onClickRepo={noop} showIssueFor="" />
    );

    expect(component).toMatchSnapshot();
    expect(component.find('ul').length).toBe(1);
    expect(component.find('li').length).toBe(2);
  });

  it('should render Issues as per showIssueFor', () => {
    const component = shallow(
      <Repos repos={repos()} onClickRepo={noop} showIssueFor="repo two name" />
    );

    expect(component).toMatchSnapshot();
    expect(component.find('ul').length).toBe(1);
    expect(component.find('li').length).toBe(2);
    expect(component.find(Issues).length).toBe(1);
  });

  it('should call onClickRepo', () => {
    const mockOnClickRepo = jest.fn();
    const component = shallow(
      <Repos
        repos={repos()}
        onClickRepo={mockOnClickRepo}
        showIssueFor="repo two name"
      />
    );
    component
      .find('li')
      .at(1)
      .prop('onClick')();

    expect(mockOnClickRepo).toBeCalledWith('repo two name');
  });
});
