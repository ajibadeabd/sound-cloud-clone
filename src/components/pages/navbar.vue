<template>
    <div class="container">
    <div class="actions">
  
<div class="nav__actions">
<div class="image-nav">
<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAWCAQAAAAs/tcnAAABMUlEQVR4Ac3UJfQUARTGUaxnrBHpPeDu7u7uTg/QO/SK9q1U3KHg2i7fH4exNeSdc9/ZNL/RHfRfjdHOuOajt246b7Fh/T38WO/9OnfM7s+hx3gUh5XNWYN7D4wnTlOe6OGsv/6eQlQFmNX9WScTs4jqwD3DOr/j04gJxHyiOsCiTgITibnEdGIJURc410lgJrGYmE+sIuoCz1301BstGwxueqQLiVXEMmI9cVp7c9WIYmAqkUysIjYQa4mtRAJtJwb//kgXEdOJTcR2Yiuxi2g/wIYfgTnEBmIFsYvYS+whDhCdBFo/ApuJvcRO4hBxhDhMHCU6Cbz5EThKHCe+7BNEcXceKFxB/e7yFs0h1hP1u/OHXHiL6nfnr2nhO6jfR3r50L5cR9O+oX5+/FX8vfkElmh0Xu+KRLEAAAAASUVORK5CYII'/>
</div>

</div>
<div class="nav__actions">
<router-link to='/'>
HOME
</router-link>

</div>
<div class="nav__actions">
<a href="/">STREAM</a>
</div>
<div class="nav__actions">
<a href="/you/library">LIBRARY</a>


</div>
    </div>

<input type="search"
class='nav__search'
 placeholder="search "/>
 <div class="action2">
 <router-link class="upload" to='/upload'>
 upload
 </router-link>
 
 </div>
 
 <div class="avatar">
 A
 </div>
 <div class="userName">
 Abdullah  </div>
  <span class=" option material-icons">
keyboard_arrow_down
</span> 
<div class="notification">
 <span class="  material-icons">
message
</span> 
 <span class="  material-icons">
notification_important
</span> 
 <span class=" material-icons">
more_vert
</span> 
</div>

 <div class="profile__dropdown">
 ltgj4ltkr
 </div>
    </div>

</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>


<style scoped>
.container{
    background-color: rgb(80, 76, 76);
    display:flex;
    flex-direction: row;
    height:49px;
    position: fixed;
    width:100%;
    margin-bottom:50px ;

}
.image-nav{
    width:90px;
    margin-top:-20px;
    margin-bottom:10px;
    height: 30px;
    padding-bottom:10px;
    padding-top: 10%;
    background-color:orangered;
    

}
img{
    width:80%;
    margin: auto;
    padding-left:9px;
    padding-right:9px;
    height:100%;
}
.actions{
    display:flex;
    justify-items: center;
    justify-content: space-around;
    padding-top:20px;
    

}
a,li{
text-decoration: none;
list-style: none;
}
.nav__actions{
    margin-top:-20px;
    padding-top:20px;
    border-width:2px solid green;
}
.nav__actions a{
    color:white;
    width:40px;
    text-align:center;
    padding-left:20px;
}
.nav__search{
    margin-left:10px;
    margin-top:10px;
    margin-bottom:10px;
    border-width: 0px;
    border-radius:5px;
    width:40%;
}
.action2{
    padding-top:14px;
    padding-left: 3px;
    display:flex
}
.upload{
    color:white;padding-top:-3px;
    font-size: 20px;
    width: 10%;
    }
    .avatar{
        background-color: rgb(230, 87, 87);
        width:30px;
        font-size:20px;
        color:white;
        margin-left: 5px;
        margin-top: 9px;
        margin-bottom: 0px;
        height:30px;
        text-align: center;
        border-radius:50%;
        padding:3px;




    }
    .userName{
        color:white;
        margin-left:5px;
        padding:17px  0px 0px 0px;
    }
    .option{
        color:white;
        margin:10px  0px 0px 0px;
        padding:0px;
    }
.notification{
    display: flex;
    color:#ffff;
    justify-content:space-around;
    width:10%
}
.notification ,.material-icons{
    padding:5px;

}
.profile__dropdown{
    background-color: rgb(231, 220, 220);
    height:200px;
    position:fixed;
    left:80%;
    top:40px;
    width:150px;
    border-radius:4px ;
    display:none
}
.profile__dropdown:hover{
    display:inline

}
</style>