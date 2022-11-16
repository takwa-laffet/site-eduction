import styled from 'styled-components';

import { SITE_WIDTH } from '../../../constants';

export const StyledNavigation = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: ${SITE_WIDTH};
  width: 65%;
  margin: 0 auto;
  padding-top: 50px;
  position: relative;
  z-index: 1;
  pointer-events: none;
  height: 50px;
`;
export const Logoicon = styled.img`
height: 108px;
width: 108px;
position: absolute;
-webkit-clip-rule: evenodd;
clip-rule: evenodd;
top: 14px;
right: 144vh;
}`;
export const PhoneIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 15px;
  pointer-events: none;

  @media (max-width: 980px) {
    margin-left: 0px;
  }
`;
