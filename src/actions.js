export const LOAD_REPOS = "LOAD_REPOS";
export const LOAD_ISSUES = "LOAD_ISSUES";
export const RECEIVE_REPOS = "RECEIVE_REPOS";
export const RECEIVE_REPOS_FAILED = "RECEIVE_REPOS_FAILED";
export const RECEIVE_ISSUES = "RECEIVE_ISSUES";
export const RECEIVE_ISSUES_FAILED = "RECEIVE_ISSUES_FAILED";
export const SHOW_ISSUE_FOR = "SHOW_ISSUE_FOR";

export const loadRepos = () => ({
  type: LOAD_REPOS
});

export const loadIssues = repo => ({
  type: LOAD_ISSUES,
  repo
});

export const receiveRepos = repos => ({
  type: RECEIVE_REPOS,
  repos
});

export const receiveReposFailed = message => ({
  type: RECEIVE_REPOS_FAILED,
  message
});

export const receiveIssues = (repo, issues) => ({
  type: RECEIVE_ISSUES,
  repo,
  issues
});

export const receiveIssuesFailed = message => ({
  type: RECEIVE_ISSUES_FAILED,
  message
});

export const showIssueFor = repo => ({
  type: SHOW_ISSUE_FOR,
  repo
});
