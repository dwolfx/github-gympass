import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getRepo } from '../services/github.api';
import MdStar from 'react-ionicons/lib/MdStar';
import MdGitNetwork from 'react-ionicons/lib/MdGitNetwork';

class Repos extends Component {
  state = { repos: [] };

  componentDidMount() {
    getRepo(({ data }) => {
      this.setState({ repos: data });
    });
  }

  render() {
    const { repos } = this.state;
    console.log(repos);
    return (
      <div>
        <p>Home / </p>
        {repos.length === 0 && <p>Carregando</p>}
        {repos.map(item => (
          <div key={item.id}>
            <NavLink exact to={`/repo/${item.name}/commits`}>
              <p>Nome: {item.name}</p>
            </NavLink>
            <div>
              <MdStar beat={true} color="orange" />: {item.stargazers_count}
              <MdGitNetwork />
              {item.forks_count}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Repos;
