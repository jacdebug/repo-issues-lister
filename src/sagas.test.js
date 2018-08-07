import { put, call } from 'redux-saga/effects';
import { receiveRepos, receiveIssues } from './actions';
import { getRepos, getIssues } from './services';
import { getReposSaga, getIssuesSaga } from './sagas';

jest.mock('./services');

describe('sagas', () => {
  // test getReposSaga
  describe('getReposSaga', () => {
    it('should call getRepos', () => {
      const gen = getReposSaga();
      expect(gen.next().value).toEqual(call(getRepos))
    });

    it('should put receive repos', () => {
      const gen = getReposSaga();
      expect(gen.next().value).toEqual(call(getRepos));
      expect(gen.next().value).toEqual(put(receiveRepos()));
    });
  });

  // test getIssuesSaga
  describe('getIssuesSaga', () => {
    it('should call getIssues', () => {
      const gen = getIssuesSaga({ repo: 'test repo'});
      expect(gen.next().value).toEqual(call(getIssues, 'test repo'));
    });

    it('should put receive repos', () => {
      const gen = getIssuesSaga({ repo: 'test repo'});
      expect(gen.next().value).toEqual(call(getIssues, 'test repo'));
      expect(gen.next().value).toEqual(put(receiveIssues('test repo')));
    });
  });
});
