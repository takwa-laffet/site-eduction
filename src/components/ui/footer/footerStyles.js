import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-size: 14px;
  margin-bottom: 25px;
  height: 25px;
  position: relative;

  a {
    color: white;
    display: inline-flex;
    align-items: center;
  }

  a:first-of-type {
    margin-right: 5px;
  }

  a:last-of-type {
    margin-left: 5px;
  }
`;

export const TexasIcon = styled.img`
  height: 25px;
  width: 25px;
`;

export const GithubIcon = styled.img`
  height: 25px;
  width: 25px;
`;
