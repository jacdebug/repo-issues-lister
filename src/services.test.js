import { getRepos, getIssues } from './services';

describe('getRepos', () => {
  it('should fetch repos', () => {
    const spy = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => ({ json: () => {} }));

    getRepos();
    expect(spy).toBeCalledWith('https://api.github.com/orgs/nodejs/repos');

    spy.mockRestore();
  });
});

describe('getIssues', () => {
  it('should fetch issues', () => {
    const spy = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => ({ json: () => {} }));

    getIssues('test repo');
    expect(spy).toBeCalledWith(
      'https://api.github.com/repos/nodejs/test repo/issues?state=open'
    );

    spy.mockRestore();
  });
});
