import React, { Component, Fragment } from 'react';

import { AppContainer, GlobalStyles } from '../../appStyles';
import {
  PageContainer,
  PageContent,
  PageLink,
  PageTitle,
  Button,
  Particles,
  Navigation,
  Footer,
} from '../ui';

import "../projects/style.css";
export class Services extends Component {
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

<Button primary >sumbit</Button>
<br/>
<Button primary to="/sp">Don't have an account?</Button>
<PageLink to='/' left>Home</PageLink>
<Footer/>
        </PageContent>
        
      </PageContainer>
      
      </Fragment>
   
      
      </AppContainer>        


</>
    );
  }
}
