import React, { Component } from 'react';

import { StyledButton } from './buttonStyles';

export { StyledButton };

export class Button extends Component {
  state = {
    children: this.props.children,
  };

  handleMouseOver = () => {
    this.setState({ children: this.props.hoverRender })
  }

  handleMouseOut = () => {
    this.setState({ children: this.props.children })
  }

  render() {
    const {
      to,
      primary,
      secondary,
      reverse,
      width,
      hoverRender,
      hoverWidth,
      disableTextOnMobile,
    } = this.props;

    return (
      <StyledButton
        to={to}
        primary={primary ? 1 : 0}
        secondary={secondary ? 1 : 0}
        reverse={reverse ? 1 : 0}
        width={width}
        hoverWidth={hoverWidth}
        onMouseOver={hoverRender ? this.handleMouseOver : null}
        onMouseOut={hoverRender ? this.handleMouseOut : null}
        disableTextOnMobile={disableTextOnMobile ? 1 : 0}
      >
        {this.state.children}
      </StyledButton>
    );
  }
};
