<template>
    
<div class="image_con" v-bind:class="{ s:circle }">

<div class="image__rapper">

<img :src=src 
v-bind:class="{ circle:circle }"
/>
</div>

  <div class="card__description">
{{songlink}}
<br>
<div v-bind:class="{ c:circle }">{{artist}}</div>

  </div>
</div>

</template>

<script>

export default {
  props: ['title','src','artist','songlink','circle'],
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.image__rapper{
  width: 100%;
  height:  150px;
    padding:0px;
  margin:0px;
  background-color: red;
}
img{
  width:100%;
  height:100%;
}
.circle{
  border-radius: 50%;
}
.c{
  text-align: center;
}
.s{
  margin-left:10px;

}
.card__description{
   width: 150px;
  height:  50px;

}
.image_con{
  background-color: rgb(221, 212, 212);
  border-radius: 3px;
  padding:11px;
  margin-top:4px;
}
</style>