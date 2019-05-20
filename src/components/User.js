import React, { Component } from 'react';
import { getUser } from '../services/github.api';
import { Image, UserLink, UserBio, TextProfile } from '../App.style';

class User extends Component {
  state = { user: {} };

  componentDidMount() {
    getUser(({ data }) => {
      this.setState({ user: data });
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <Image src={user.avatar_url} />
        <TextProfile>
          <p>
            <UserLink href={`https://github.com/${user.login}`}>
              {user.name}
            </UserLink>
          </p>
          <UserBio>{user.bio}</UserBio>
          <p>
            <UserLink href={user.blog}>{user.blog}</UserLink>
          </p>
        </TextProfile>
      </div>
    );
  }
}
export default User;
