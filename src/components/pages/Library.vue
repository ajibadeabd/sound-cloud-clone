<template>
    <div class="container">
<ul class="action">
    <li>
<router-link class='link' to='/you/library/overview'>
Overview

</router-link>
    </li>
    <li>

<router-link class='link' to='/you/library/likes'>
Likes

</router-link>

    </li>
    <li>
<router-link class='link' to='/you/library/playlist'>

Playlists
    </router-link>
    </li>
    <li>
    <router-link class='link' to='/you/library/album'>

Albums
    </router-link>
    </li>
    <li>
    <router-link class='link' to='/you/library/Station'>
Stations
    </router-link>
    </li>
    <li>
<router-link class='link' to='/you/library/following'>
following
    </router-link>
    </li>
    <li>
    
<router-link class='link' to='/you/library/history'>
history
    </router-link>
    </li>
</ul>
<div class="try">
<router-view/>
</div>
<div class="legal">
        Legal - Privacy - Cookies - Imprint - Creator Resources - Blog - Chart - Popular search
        <br>
        Language: English
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
     margin:auto;
    width:96%;
    border:1px solid rgb(235, 229, 229);
    padding:10px;
    height: 500px;
}
.try{

}
.legal{
    color:rgb(212, 209, 209);
    padding-top: 20px;
    margin-top: 20px;
    border-top:1px solid rgb(189, 181, 181)

}
li{
    list-style:none;
    font-size:20px;
}
.action{
    display:flex;
    justify-content: space-between;
    border-Bottom:1px solid rgb(197, 191, 191);
    width:70%;
}
.action>li{
    padding-bottom:25px;
    font-size:25px;

}
.action>li:hover{
    padding-bottom:14px;

    border-Bottom:1px solid grey;
}
li>.link{
    text-decoration: none;
    font-size: 10px;
}
</style>