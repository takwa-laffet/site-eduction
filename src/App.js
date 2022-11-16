import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './components/home/Home';
import { Projects } from './components/projects/Projects';
import { Services } from './components/services/Services';
import {
  Particles,
  Navigation,
  AnimatedSwitch,
  Footer,
} from './components/ui';
import {
  AppContainer,
  GlobalStyles,
  AppContent,
} from './appStyles';
import "./App.css";

import Student from './components/Logup/Student';
import Professor from './components/Logup/Professor';
import PageETU from './components/Page/PageE/src';


export const App = () => (
<>    <BrowserRouter>
<Switch >
                <Route exact path="/" component={Home} />
                <Route path="/etudiant" component={Projects} />
                <Route path="/prof" component={Services} />
 
            {/*     <Route path={"/pagee"} component={PageETU}/> */}
                <Route path={"/se"} component={Student}/>
                <Route path={"/sp"} component={Professor}/>
  
              </Switch>
              </BrowserRouter></>
);
