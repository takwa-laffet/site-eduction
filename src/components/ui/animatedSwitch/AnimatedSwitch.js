import React, { Component, Fragment } from 'react';

import { CurrentComponent, EnteringComponent } from './animatedSwitchStyles';

const routes = {
  '/': {
    leftRoute: '/projects',
    rightRoute: '/services',
    enterAnimation: 'fadeIn',
    exitAnimation: 'fadeOut',
  },
  '/projects': {
    leftRoute: null,
    rightRoute: '/',
    enterAnimation: 'fromLeft',
    exitAnimation: 'toLeft',
  },
  '/services': {
    leftRoute: '/',
    rightRoute: null,
    enterAnimation: 'fromRight',
    exitAnimation: 'toRight',
  },
};

export class AnimatedSwitch extends Component {
  state = {
    animating: false,
    currentComponent: this.props.children,
    enteringComponent: null,
    enterAnimation: null,
    exitAnimation: routes[this.props.location.pathname].exitAnimation,
    initialX: 0,
    translation: 0,
  };

  componentDidMount() {
    document.addEventListener('touchstart', this.handleTouchStart);
    document.addEventListener('touchmove', this.handleTouchMove);
    document.addEventListener('touchend', this.handleTouchEnd);
  }

  componentWillUnmount() {
    document.removeEventListener('touchstart', this.handleTouchStart);
    document.removeEventListener('touchmove', this.handleTouchMove);
    document.removeEventListener('touchend', this.handleTouchEnd);
  }

  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    if (pathname !== prevProps.location.pathname) {
      const enterAnimation = routes[pathname].enterAnimation;
      const exitAnimation = routes[prevProps.location.pathname].exitAnimation;

      this.setState({
        enteringComponent: this.props.children,
        currentComponent: prevProps.children,
        enterAnimation,
        exitAnimation,
        translation: 0,
        initialX: null,
      }, () => this.setState({ animating: true }));
    }
  }

  handleTransitionEnd = () => (
    this.setState((state) => ({
      animating: false,
      currentComponent: state.enteringComponent,
      enteringComponent: null,
      enterAnimation: null,
      exitAnimation: routes[this.props.location.pathname].exitAnimation,
    }))
  );

  handleTouchStart = (event) => {
    this.setState({ initialX: event.touches[0].pageX });
  }

  handleTouchMove = (event) => {
    if (!this.state.initialX) return false;
    const translation = event.touches[0].pageX - this.state.initialX;
    const currentRoute = routes[this.props.location.pathname];
    if (Math.abs(translation) < 50) return false;

    if (translation < -100 && currentRoute.rightRoute) {
      return this.props.history.push(currentRoute.rightRoute);
    } else if (translation > 100 && currentRoute.leftRoute) {
      return this.props.history.push(currentRoute.leftRoute);
    }

    return this.setState({ translation });
  }

  handleTouchEnd = () => this.setState({ translation: 0 });

  render() {
    return (
      <Fragment>
        <CurrentComponent
          animating={this.state.animating}
          animation={this.state.exitAnimation}
          translation={this.state.translation}
        >
          {this.state.currentComponent}
        </CurrentComponent>
        {this.state.enteringComponent && (
          <EnteringComponent
            animating={this.state.animating}
            animation={this.state.enterAnimation}
            onTransitionEnd={this.handleTransitionEnd}
          >
            {this.state.enteringComponent}
          </EnteringComponent>
        )}
      </Fragment>
    );
  }
}
