import React, { Fragment } from "react";
import { AppContainer, GlobalStyles } from "../../../appStyles";
import { Button, Footer, Navigation, PageContainer, PageContent, PageLink, PageTitle, Particles } from "../../ui";

export default function Student(){
    return (<div>
       <AppContainer className="back">
<GlobalStyles/>
<Particles/>
<Fragment>
    <Navigation/>
    <PageContainer>
        <PageContent>
         <PageTitle>sing-up</PageTitle>   
         <div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" class="form__label">Name</label>
  <br></br>
  <br></br>
  <br></br>

  <input type="input" class="form__field1" placeholder="Last name" name="name" id='name' required />
  <label for="name" class="form__label1">Last name</label>  <br/>
  <br/>
  <label for="name" class="form__label12" >your cart</label>
  <br/>
<br/>

  <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"/>

</div>
<br/>
<br/>


<Button primary>sumbit</Button>
<PageLink to='/etudiant' left>Login</PageLink>

<Footer/>
        </PageContent>
    </PageContainer>
</Fragment>
       </AppContainer>
    </div>)
}