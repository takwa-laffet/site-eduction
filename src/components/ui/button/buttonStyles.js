import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS } from '../../../constants';

export const StyledButton = styled(Link)`
  border: 2px solid;
  border-radius: 3px;
  padding: 10px 25px;
  font-size: 14px;
  text-transform: capitalize;
  color: white;
  transition: background-color 0.3s, color 0.3s;
  pointer-events: all;
  font-weight: 600;
  text-align: center;
  width: ${({ width }) => width && `${width}px`};
  max-width: ${({ width }) => !width && '125px'};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  ${({ primary }) => primary ? `
    border-color: ${COLORS.YELLOW};

    &:hover {
      color: ${COLORS.BLUE_DARK};
      background-color: ${COLORS.YELLOW};
    }
  ` : null}

  ${({ primary, reverse, hoverWidth }) => primary && reverse ? `
    background-color: ${COLORS.YELLOW};
    color: ${COLORS.BLUE_DARK};

    &:hover {
      color: white;
      background-color: transparent;
      width: ${hoverWidth && `${hoverWidth}px`};
      max-width: ${!hoverWidth && '125px'};
    }
  ` : null}

  ${({ secondary }) => secondary ? `
    border-color: ${COLORS.BLUE_LIGHT};

    &:hover {
      background-color: ${COLORS.BLUE_LIGHT};
    }
  ` : null}

  ${({ disableTextOnMobile }) => disableTextOnMobile ? `
    @media (max-width: 980px) {
      font-size: 0px;
      width: auto;

      div {
        width: 0;
      }

      &:hover {
        width: auto;
      }
    }
  ` : null}
`;
