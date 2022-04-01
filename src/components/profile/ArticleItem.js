import React from 'react';
 import login from '../../images/login.jpg'

const ArticleItem = () => {

return(
  <div class="row">
  <div class="col s9 m4">
    <div class="card">
      <div class="card-image">
        <img src={login}/>
        
      </div>
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits 
          
        </p>
      </div>
      <div class="card-action">
        <a href="#">ReadMore</a>
      </div>
    </div>
  </div>
</div>
          
            

)

}

export default ArticleItem;