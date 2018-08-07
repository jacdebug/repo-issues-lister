import { call, put, takeLatest } from "redux-saga/effects";
import {
  receiveRepos,
  receiveReposFailed,
  receiveIssues,
  receiveIssuesFailed,
  LOAD_REPOS,
  LOAD_ISSUES
} from "./actions";
import { getRepos, getIssues } from "./services";

export function* getReposSaga() {
  try {
    const repos = yield call(getRepos);
    yield put(receiveRepos(repos));
  } catch (e) {
    yield put(receiveReposFailed(e.message));
  }
}

export function* getIssuesSaga({ repo }) {
  try {
    const issues = yield call(getIssues, repo);
    yield put(receiveIssues(repo, issues));
  } catch (e) {
    yield put(receiveIssuesFailed(e.message));
  }
}

export default function* watch() {
  yield takeLatest(LOAD_REPOS, getReposSaga);
  yield takeLatest(LOAD_ISSUES, getIssuesSaga);
}
