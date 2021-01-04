<template>
    <div class="container">
     <div class="control">
     
     <span class="material-icons">skip_previous</span>
     <span class="material-icons">play_arrow</span>
     <span class="material-icons">skip_next</span>
     <span class="material-icons">shuffle</span>
     <span class="material-icons">repeat</span>
     
     </div>
     <div class='contain'>
     <span class="start">0.00</span>
     <span class="length"></span>
     <span class="end">3.40</span>
     </div>

     <div class="profile">
     <span class="material-icons">favorite</span>
     <span class="material-icons">person_add</span>
     <span class="material-icons">next_plan</span>

     </div>
    </div>
</template> 

<script>
export default {

}
</script>

<style  scoped>
.container{
    display: flex;
    justify-content: center;
    background-color: rgb(185, 183, 183);
    height:30px;
    width:100%;
    bottom:0px;
    padding: 14px;
    position:fixed;
}
.control{
    display:flex;
    justify-content: space-between;
    width:20%;

}
.length{
    background-color:rgb(155, 49, 49);
    width: 50%;
    height: 3px;
}
.contain{
    display:flex;
    justify-content: center;
    align-items: center;
    width:50%;

}
.start,.end{
    padding:0px;
    margin:0px;
}
</style>