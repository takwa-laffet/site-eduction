import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  
  PageContainer,
  PageContent,
  PageTitle,
  PageLink,
  Particles,
  Button,
  Footer,
  Navigation,
} from '../ui';
import {
  AppContainer,
  GlobalStyles,
  AppContent,
} from '../../appStyles';

import "./style.css";
import "../../App.css";
export class Projects extends Component {
  render() {
    return (
      <><AppContainer className="back">    
      <GlobalStyles/>
          <Particles />
          <Fragment>
            <Navigation/>
       <PageContainer>
        <PageContent>
          <PageTitle>Sing-in</PageTitle>
          <div class="form__group field">
  <input type="input" class="form__field" placeholder="Email" name="name" id='name' required />
  <label for="name" class="form__label">Email</label>
  <br></br>
  <br></br>
  <br></br>

  <input type="input" class="form__field1" placeholder="password" name="name" id='name' required />
  <label for="name" class="form__label1">Password</label>
</div>
<br/>
<br/>

<Button primary to='/'>sumbit</Button>
<br/>
<Button primary to='/se'>Don't have an account?</Button>
<PageLink to='/' right>Home</PageLink>
<Footer/>   

        </PageContent>
       
     
      </PageContainer>
      </Fragment>
</AppContainer>        
</>
     );
  }
}
