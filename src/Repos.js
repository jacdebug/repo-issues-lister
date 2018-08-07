import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, renderComponent, lifecycle, branch } from "recompose";
import { selectRepos, selectShowIssueFor } from "./reducers";
import { loadRepos, showIssueFor } from "./actions";
import Loading from "./Loading";
import Issues from "./Issues";

export const Repos = ({ repos, onClickRepo, showIssueFor }) => (
  <ul>
    {repos.map(({ id, name }) => (
      <Fragment key={id}>
        <li onClick={() => onClickRepo(name)}>{name}</li>
        {showIssueFor === name && <Issues repo={name} />}
      </Fragment>
    ))}
  </ul>
);

Repos.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onClickRepo: PropTypes.func.isRequired,
  showIssueFor: PropTypes.string.isRequired
};

export default compose(
  connect(
    state => ({
      repos: selectRepos(state),
      showIssueFor: selectShowIssueFor(state)
    }),
    dispatch => ({
      onClickRepo: repo => dispatch(showIssueFor(repo)),
      loadRepos: () => dispatch(loadRepos())
    })
  ),
  lifecycle({
    componentDidMount() {
      if (!this.props.repos.length) {
        this.props.loadRepos();
      }
    }
  }),
  branch(props => !props.repos.length, renderComponent(() => <Loading />))
)(Repos);
