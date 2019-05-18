import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Helvetica', Arial, sans-serif;
  }
`;
export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div`
  width: 100vw;
  background-color: #333;
  height: 3rem;
  position: relative;
  display: flex;
  justify-content: center;
`;
export const HeaderTitle = styled.div`
  color: #fff;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 970px;
  display: flex;
`;
export const AreaProfile = styled.div`
  width: 30%;
`;
export const AreaContent = styled.div`
  width: 70%;
`;
