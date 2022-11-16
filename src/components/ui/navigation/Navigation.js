import React, { Fragment } from 'react';

import phone from '../../../assets/images/phone.svg';
import phoneWhite from '../../../assets/images/phoneWhite.svg';
import  Logoiset  from '../../../assets/images/Logoiset.svg';
import { Logo, Button } from '../';
import {
  StyledNavigation,
  PhoneIcon,
Logoicon} from './navigationStyles';

export const Navigation = () => (
  <StyledNavigation>
      <Logoicon src={Logoiset}/>
    <Logo width={175} />
    <Button
      width={105}
      hoverWidth={140}
      to="/services"
      hoverRender={(
        <Fragment>
          <div>If you want to know about us</div><PhoneIcon src={phoneWhite} />
        </Fragment>
      )}
      primary
      reverse
      disableTextOnMobile
    ><div>Call<br />us</div><PhoneIcon src={phone} /></Button>
  </StyledNavigation>
)
