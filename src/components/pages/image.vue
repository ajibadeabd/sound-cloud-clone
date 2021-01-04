<template>
    
<div class="image_con"
v-bind:class="{ s:circle }"
>


<img :src=src 
v-bind:class="{ circle:circle }"
/>

<div class="card__description">
{{songlink}}
<br>
<div 
v-bind:class="{ c:circle }"

>
{{artist}}

</div>

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
img{
  width:98%;
  height:95%;
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
  height: 5%;
  width:80%;
}
.image_con{
  margin-bottom:26px;
  display:flex;
  height:200px;
  flex-direction:column;
  justify-items:center;
  text-align:justify; 
  width:180px; 

}
</style>