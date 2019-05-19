import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getCommits } from '../services/github.api';
import Loader from './Loader';

const filterCommits = (commits, term) => {
  return commits.filter(({ commit }) => includesTerm(commit.message, term));
};
const includesTerm = (text, term) =>
  text.toUpperCase().includes(term.toUpperCase());

class Commit extends Component {
  state = {
    commits: [],
    filter: ''
  };

  componentDidMount() {
    const { match } = this.props;
    getCommits(match.params.repo, ({ data }) => {
      this.setState({ commits: data });
    });
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    let { commits, filter } = this.state;
    const { match } = this.props;
    commits = filterCommits(commits, filter);

    return (
      <div>
        <p>
          <NavLink exact to="/">
            Home
          </NavLink>
          / {match.params.repo} / Commits
        </p>
        <input
          type="text"
          value={filter}
          onChange={this.handleChange('filter')}
        />

        {commits.length === 0 && <Loader />}
        {commits.map(item => (
          <div key={item.sha}>
            <p>{item.commit.message}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Commit;
