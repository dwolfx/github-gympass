import React from 'react';
// import axios from 'axios';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  GlobalStyle,
  Header,
  Container,
  HeaderTitle,
  Content,
  AreaProfile,
  AreaContent
} from './App.style';
import Repo from './components/Repo';
import Commit from './components/Commit';
import User from './components/User';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <Content>
          <HeaderTitle>
            <p>Github - Gympass</p>
          </HeaderTitle>
        </Content>
      </Header>
      <Content>
        <AreaProfile>
          <User />
        </AreaProfile>
        <AreaContent>
          <Switch>
            <Route path="/repo/:repo/commits" component={Commit} />
            <Route path="/" component={Repo} />
            <Redirect to="/" />
          </Switch>
        </AreaContent>
      </Content>
    </Container>
  );
}

export default App;
