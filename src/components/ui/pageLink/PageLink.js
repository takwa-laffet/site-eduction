import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Container,
  StyledPageLink,
  Content,
} from './pageLinkStyles';

class PageLinkClass extends Component {
  componentDidMount() {
    document.addEventListener('keyup', this.keyboardShortcuts);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyboardShortcuts);
  }

  keyboardShortcuts = (event) => {
    if (event.code === 'ArrowLeft' && this.props.left) {
      return this.props.history.push(this.props.to);
    }
    if (event.code === 'ArrowRight' && this.props.right) {
      return this.props.history.push(this.props.to);
    }
  }

  render() {
    const left = this.props.left ? 1 : 0;
    const right = this.props.right ? 1 : 0;
    return (
      <Container left={left} right={right}>
        <StyledPageLink
          to={this.props.to}
          left={left}
          right={right}
        >
          <Content left={left} right={right}>
            {this.props.children}
          </Content>
        </StyledPageLink>
      </Container>
    );
  }
}

export const PageLink = withRouter(PageLinkClass);
