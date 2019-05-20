import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getRepo } from '../services/github.api';
import MdStar from 'react-ionicons/lib/MdStar';
import MdGitNetwork from 'react-ionicons/lib/MdGitNetwork';
import {
  ReposList,
  RepoHeader,
  FlexBox,
  RepoSpace,
  RepoIcons,
  RepoCount
} from '../App.style';
import Loader from './Loader';

const compare = {
  stars: (a, b) => {
    if (a.stargazers_count > b.stargazers_count) return -1;
    if (a.stargazers_count < b.stargazers_count) return 1;
    return 0;
  },
  forks: (a, b) => {
    if (a.forks_count > b.forks_count) return -1;
    if (a.forks_count < b.forks_count) return 1;
    return 0;
  }
};
class Repos extends Component {
  state = { repos: [] };

  componentDidMount() {
    getRepo(({ data }) => {
      this.setState({ repos: data });
    });
  }

  sortBy = sort => () => {
    let { repos } = this.state;
    repos = repos.sort(compare[sort]);
    this.setState({ repos });
  };

  render() {
    const { repos } = this.state;
    console.log(repos);
    return (
      <div>
        <RepoHeader>
          <p>Home / </p>
          <FlexBox>
            <RepoSpace>Sort By: </RepoSpace>
            <RepoIcons onClick={this.sortBy('stars')}>
              <MdStar beat={true} color="orange" /> Stars
            </RepoIcons>
            <RepoSpace> / </RepoSpace>
            <RepoIcons onClick={this.sortBy('forks')}>
              <MdGitNetwork /> Forks
            </RepoIcons>
          </FlexBox>
        </RepoHeader>
        {repos.length === 0 && <Loader />}
        {repos.map(item => (
          <NavLink key={item.id} exact to={`/repo/${item.name}/commits`}>
            <ReposList>
              <p>{item.name}</p>
              <FlexBox>
                <RepoCount>
                  <MdStar beat={true} color="orange" /> {item.stargazers_count}
                </RepoCount>
                <RepoCount>
                  <MdGitNetwork /> {item.forks_count}
                </RepoCount>
              </FlexBox>
            </ReposList>
          </NavLink>
        ))}
      </div>
    );
  }
}

export default Repos;
