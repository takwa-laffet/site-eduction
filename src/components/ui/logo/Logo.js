import React from 'react';

import {
  StyledLogo,
  Primary,
  Secondary,
} from './logoStyles';
export const Logo = ({ width }) => {
  const primaryFontSize = width * .22;
  const secondaryFontSize = width * .1;

  return (
    <StyledLogo to="/">
      <Primary fontSize={primaryFontSize}>Iset</Primary>
      <Secondary fontSize={secondaryFontSize}>Kebili</Secondary>
    </StyledLogo>
  );
};
