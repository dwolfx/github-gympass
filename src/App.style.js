import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Helvetica', Arial, sans-serif;
  }
  *{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  a:hover{
    text-decoration: underline;
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
  padding: 2rem 4rem 0 0;
`;
export const AreaContent = styled.div`
  width: 70%;
`;
export const ReposList = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #333;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0 1rem;
  justify-content: space-between;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
export const TextProfile = styled.div`
  padding: 0 1rem;
  width: 100%;
`;
export const UserLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #333;
`;
export const RepoLink = styled.p`
  font-weight: bold;
  color: #333;
`;
export const UserBio = styled.p`
  color: #333;
  font-weight: 100;
  font-size: 1rem;
  padding-bottom: 2rem;
`;
export const RepoHeader = styled.div`
  display: flex;
  padding-top: 1rem;
  justify-content: space-between;
`;
export const RepoIcons = styled.p`
  display: flex;
  align-items: center;
  height: 1rem;
  cursor: pointer;
`;
export const FlexBox = styled.div`
  display: flex;
`;
export const RepoSpace = styled.p`
  padding: 0 0.5rem;
`;
export const RepoCount = styled.p`
  width: 70px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;
export const CommitHeader = styled.p`
  display: flex;
  align-items: center;
  height: 2rem;
`;
export const CommitInput = styled.input`
  width: 15rem;
  height: 2rem;
  margin-top: 1rem;
  outline: none;
`;
