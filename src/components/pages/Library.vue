<template>
    <div class="container">
<ul class="action">
    <li>
Overview
    </li>
    <li>

<router-link class='link' to='/you/library/likes'>
Likes

</router-link>

    </li>
    <li>
Playlists
    </li>
    <li>
    <router-link class='link' to='/you/library/playlist'>

Albums
    </router-link>
    </li>
    <li>
    <router-link class='link' to='/you/library/playlist'>
Stations
    </router-link>
    </li>
    <li>
Following
    </li>
    <li>
    
History
    </li>
</ul>
<router-view/>

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
    width:80%;
    border:1px solid rgb(235, 229, 229);
    padding:10px;
    height: 200px;
}
li{
    list-style:none;
    font-size:20px;
}
.action{
    display:flex;
    justify-content: space-evenly;
    border-Bottom:1px solid rgb(197, 191, 191);
}
.action>li{
    padding-bottom:15px;
    font-size:78%;

}
.action>li:hover{
    padding-bottom:14px;

    border-Bottom:1px solid grey;
}
li>.link{
    text-decoration: none;
}
</style>