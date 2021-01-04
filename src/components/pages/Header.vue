<template>
<div >
<div >
<div class="header__body">

  <div class=header__image>
  
<div class="soundclound">

<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAWCAQAAAAs/tcnAAABMUlEQVR4Ac3UJfQUARTGUaxnrBHpPeDu7u7uTg/QO/SK9q1U3KHg2i7fH4exNeSdc9/ZNL/RHfRfjdHOuOajt246b7Fh/T38WO/9OnfM7s+hx3gUh5XNWYN7D4wnTlOe6OGsv/6eQlQFmNX9WScTs4jqwD3DOr/j04gJxHyiOsCiTgITibnEdGIJURc410lgJrGYmE+sIuoCz1301BstGwxueqQLiVXEMmI9cVp7c9WIYmAqkUysIjYQa4mtRAJtJwb//kgXEdOJTcR2Yiuxi2g/wIYfgTnEBmIFsYvYS+whDhCdBFo/ApuJvcRO4hBxhDhMHCU6Cbz5EThKHCe+7BNEcXceKFxB/e7yFs0h1hP1u/OHXHiL6nfnr2nhO6jfR3r50L5cR9O+oX5+/FX8vfkElmh0Xu+KRLEAAAAASUVORK5CYII'/>
</div>

<ul class="header__action">

<li @click="login" class="login"><a>login</a></li>
<li @click="signup" class="signup"><a >sign up</a></li>
</ul>
  </div>
  <div class="center__content">
  <h1 class=" minititle">connect on sound clound</h1>
  
 <p class="epistle"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt reiciendis quia illum ratione in voluptatum nihil esse ducimus. Voluptates rem, ut cupiditate iure deserunt sed distinctio ullam minus fugiat id! 
</p>
 <br/>
<li class="button"><a href="/">sign up for free</a></li>

  </div>
  </div>
  
<div class="search">
<input type="search" class="search__input"/>
<div class='or'>or</div>

<div class="search__upload">
upload your own</div>
</div>

<div class="heariswhar">
hear is what is trendin in sound clound comunity
</div>
<div class="image__container">

<Image />
<Image />
<Image />
<Image />
<Image />
<Image />
</div>
<li class="explore"><a href="/">Explore trending play list
</a></li>
<div>
<Login  v-if="action==='login'" class="login_form"/>

</div>
<div>
<Register  v-if="action==='register'" class="login_form"/>

</div>
</div>
</div>

</template>

<script>
import Image from './image'
import Login from './login'
import Register from './register'
export default {
  name: 'App',
  data(){
    return{
        action:''
    }
  },
  methods:{
    signup(){
      this.action="register"
    },
    login(){
      this.action="login"

    },
  },
  components: {
    Image,Login,Register
  }
}
</script>
<style scoped >

.login_forma{
  color:white;
  background-color:white;
  border-radius: 5px;
  padding:30px;
  width:300px;
  max-width:350px;
  height:300px;
  left:30%;
  top:15%;
  position:fixed
}
.login_form{
  background-color:white;
margin:0%;
justify-content: center;
width:300px;
  top:15%;
  left:25%;
  padding-top:10px;
  padding-left:10px;
  padding-right:10px;
  padding-top:10px;
  padding-bottom:10px;
  border-radius: 6px;
  position:fixed

}
.image_con{
  display:flex;
  flex-direction:column;
  justify-items:center;
  text-align:justify; 
  width:200px; 

}
.button{
  padding:6px;
  background-color: red;
  margin-right:20%;
  margin-left:20%;
  margin-bottom:7px;
  color:#fff;
  border-radius: 6px;
  text-align: center;
border: 2px solid white ;
}
.explore{
  margin:16%;
padding:10px;
border-radius: 4px;
color:white;
  color:#fff;
  text-align:center;
  margin-top:18px;
  background-color: red;



}
.image__container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  z-index: 1;
  margin:0px 5px;

}
/*
.card__image{
  height:200px;
  width:30%;
  flex:1;
}*/
.login,.signup,.other{
  margin:0px 20px;
  margin-top:20px;
  padding:5px 0px 0px 11px;
border: 2px solid white ;
  color:white;
  width:50px;
  height:30px;
  border-radius:5px;
}
ul li a{
  color:white;
}
li,a{
  list-style:none;
  color:'#fff';
  text-decoration: none;
}
.minititle{
text-align:center;
color:white;
font-size:30px;
margin:6px;
margin-bottom:60px;
margin-top:60px;

}
.epistle{
text-align:center;
color:white;
font-size:20px;
margin:6px 30px;
margin-Bottom:0px;
}
.signup{
  width:70px;
  color:white;
  background-color:red;
  padding:5px 0px 0px 11px;

}
.header__image{
display: flex;
flex-direction: "row";
justify-content:"space-evenly";
height: 70px;
width:100%;


}
.soundclound{
width:100%;
color:white;
font-size:30px;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
padding:11px 0px 0px 20px;
}
.header__action{
  color:white;
display: flex;
justify-content:"space-between";


}
.header__body{
background-image:url('https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg');
background-size:cover;
background-position:top bottom;
width:100% ;
font-size:20px;
min-height: 500px;
background-repeat:no-repeat;


}
.center__content{
  justify-content: "center";
  justify-items: "center";
  align-items: justify;
  display:"flex";
  flex-direction: column;
}
.search{
  display:flex;
  justify-content: space-between;
  width:90%;
  margin:auto;
}
.search__upload{
  background-color:red;
  border-radius: 4px;
  padding: 6px;
  margin: 6px;
  text-align: center;
  color:#fff;
  width:150px;
  height:30px;


}
.search__input{
  width:82%;
  background-color:rgb(233, 229, 229);
  border:0px solid blue;
  border-radius:4px;
  margin: 6px;
  height:40px;

}
.or{
  font-size:20px;
  margin: 6px;

}
.image__container{
  display: flex;
}
.card__image{
  margin:2px;
  flex:1
}
.heariswhar{
text-align: center;
font-size:30px;
padding:0px;
margin:0px;
}

</style>
