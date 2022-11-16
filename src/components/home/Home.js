import React, { Component } from 'react';
import  { Fragment } from 'react';

import {
  Particles,
  Navigation,
  AnimatedSwitch,
  Footer,
} from '../ui';
import {
  AppContainer,
  GlobalStyles,
  AppContent,
} from '../../appStyles';

import {
  PageContainer,
  PageLink,
  Button,

} from '../ui';
import {
  Container,
  Content,
  Title,
  PlusSign,
  NavigationRow,
} from './homeStyles';
export class Home extends Component {
  render() {
    return (
      <> <AppContainer className="back">
      <GlobalStyles />
      <Particles />
      <Fragment>
        <Navigation />
        <AppContent>
          <PageLink to='/etudiant' left>Student space</PageLink>
          <Container>
            <Content>
              <Title>Republic of Tunisia</Title>
              
              <Title>Ministry of Higher Education and Scientific Research</Title>
              <br></br>
              <Title>HIGHER INSTITUTES of kebili</Title>
            
              <NavigationRow>
                <Button to="/projects" secondary>Check out News</Button>
                <Button to="/services" primary>See what We Have</Button>
              </NavigationRow>
            </Content>
          </Container>
          <PageLink to='/prof' right>Professor Space</PageLink>
     
        </AppContent>
        <Footer />
      </Fragment>
        </AppContainer>
  </>
         );
  }
}
