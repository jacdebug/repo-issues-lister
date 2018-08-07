import { combineReducers } from "redux";
import {
  RECEIVE_REPOS,
  RECEIVE_ISSUES,
  SHOW_ISSUE_FOR
} from "./actions";

export const reposReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_REPOS:
      return action.repos;
    default:
      return state;
  }
};

export const issuesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ISSUES:
      return {
        ...state,
        [action.repo]: action.issues
      };
    default:
      return state;
  }
};

export const showIssueForReducer = (state = "", action) => {
  switch (action.type) {
    case SHOW_ISSUE_FOR:
      return action.repo;
    default:
      return state;
  }
};

// root reducer
export default combineReducers({
  repos: reposReducer,
  issues: issuesReducer,
  showIssueFor: showIssueForReducer,
  // logger: (state = "logger", action) => (console.log(action), state)
});

// selectors
export const selectRepos = state => state.app.repos;
export const selectIssues = (state, repo) => state.app.issues[repo];
export const selectShowIssueFor = state => state.app.showIssueFor;
