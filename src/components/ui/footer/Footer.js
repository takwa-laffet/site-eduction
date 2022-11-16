import React from "react";

import texas from "../../../assets/images/texas.svg";

import { StyledFooter, TexasIcon, GithubIcon } from "./footerStyles";

export const Footer = () => (
  <StyledFooter>
    <a
      href="https://www.google.com/search?q=tunisia&oq=tunisia+&aqs=chrome..69i57j69i59l2j69i60l3.3632j0j1&sourceid=chrome&ie=UTF-8"
      target="blank"
    >
      Made In <TexasIcon src={texas} />
    </a>{" "}
    <a target="blank">
      
      <span class="icon">||
       with ♥ of Takwa Laffet & Amel Ferhi </span>
    </a>
  </StyledFooter>
);
