import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getCommits } from '../services/github.api';

class Commit extends Component {
  state = { commits: [] };

  componentDidMount() {
    const { match } = this.props;
    getCommits(match.params.repo, ({ data }) => {
      this.setState({ commits: data });
    });
  }

  render() {
    const { commits } = this.state;
    const { match } = this.props;
    console.log(commits);
    return (
      <div>
        <p>
          <NavLink exact to="/">
            Home
          </NavLink>
          / {match.params.repo} / Commits
        </p>
        {commits.length === 0 && <p>Carregando</p>}
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
