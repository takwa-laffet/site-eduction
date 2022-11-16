import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLogo = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: all;
  user-select: none;
`;

export const Primary = styled.h1`
  color: white;
  line-height: .9;
  font-weight: 400;
  font-family: Montserrat;
  font-size: ${props => props.fontSize}px;
  letter-spacing: ${props => props.fontSize * .05}px;
`;

export const Secondary = styled.h1`
  color: #fb1;
  line-height: .9;
  font-weight: bold;
  font-family: Bitter;
  font-size: ${props => props.fontSize}px;
  text-transform: uppercase;
  letter-spacing: ${props => props.fontSize * .05}px;
`;
