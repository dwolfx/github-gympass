import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getCommits } from '../services/github.api';
import Loader from './Loader';
import {
  ReposList,
  RepoHeader,
  RepoSpace,
  FlexBox,
  CommitHeader,
  CommitInput,
  RepoLink
} from '../App.style';

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
        <RepoHeader>
          <FlexBox>
            <CommitHeader>
              <NavLink exact to="/">
                <RepoLink>Home</RepoLink>
              </NavLink>
              <RepoSpace>/</RepoSpace> {match.params.repo}
            </CommitHeader>
          </FlexBox>
          <FlexBox>
            <CommitInput
              type="text"
              placeholder="Pesquisar por Commit"
              value={filter}
              onChange={this.handleChange('filter')}
            />
          </FlexBox>
        </RepoHeader>

        {commits.length === 0 && <Loader />}
        {commits.map(item => (
          <ReposList key={item.sha}>
            <p>{item.commit.message}</p>
          </ReposList>
        ))}
      </div>
    );
  }
}

export default Commit;
