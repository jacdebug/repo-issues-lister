import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, renderComponent, lifecycle, branch } from "recompose";
import { selectIssues } from "./reducers";
import { loadIssues } from "./actions";
import Loading from "./Loading";

export const Issues = ({ issues }) => (
  <ul>{issues.map(({ id, title }) => <li key={id}>{title}</li>)}</ul>
);

Issues.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default compose(
  connect(
    (state, props) => ({
      issues: selectIssues(state, props.repo)
    }),
    dispatch => ({
      loadIssues: repo => dispatch(loadIssues(repo))
    })
  ),
  lifecycle({
    componentDidMount() {
      if (!this.props.issues) {
        this.props.loadIssues(this.props.repo);
      }
    }
  }),
  branch(props => !props.issues, renderComponent(() => <Loading />))
)(Issues);
