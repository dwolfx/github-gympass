import React, { Component } from 'react';
import { getUser } from '../services/github.api';

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
        <p>{user.url}</p>
        <img src={user.avatar_url} />
      </div>
    );
  }
}
export default User;
