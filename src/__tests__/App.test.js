import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Root from '../Root';

it('Teste 1', () => {
  expect(true).toBe(true);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Root>
      <App />
    </Root>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
