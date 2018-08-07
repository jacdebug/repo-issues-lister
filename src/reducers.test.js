import { reposReducer, issuesReducer, showIssueForReducer } from './reducers';
import { RECEIVE_REPOS, RECEIVE_ISSUES, SHOW_ISSUE_FOR } from './actions';

describe('reposReducer', () => {
  it('should create default state', () => {
    expect(
      reposReducer(undefined, {
        type: 'init',
      })
    ).toEqual([]);
  });

  it('should update state with received repos', () => {
    expect(
      reposReducer([], {
        type: RECEIVE_REPOS,
        repos: ['repo1', 'repo2'],
      })
    ).toEqual(['repo1', 'repo2']);
  });
});

describe('issuesReducer', () => {
  it('should create default state', () => {
    expect(
      issuesReducer(undefined, {
        type: 'init',
      })
    ).toEqual({});
  });

  it('should update state with received issues', () => {
    expect(
      issuesReducer(
        {},
        {
          type: RECEIVE_ISSUES,
          repo: 'test repo',
          issues: ['issue1', 'issue2'],
        }
      )
    ).toEqual({
      'test repo': ['issue1', 'issue2'],
    });
  });
});

describe('showIssueForReducer', () => {
  it('should create default state', () => {
    expect(
      showIssueForReducer(undefined, {
        type: 'init',
      })
    ).toEqual('');
  });

  it('should update state with repo name', () => {
    expect(
      showIssueForReducer(
        {},
        {
          type: SHOW_ISSUE_FOR,
          repo: 'show repo',
        }
      )
    ).toEqual('show repo');
  });
});
