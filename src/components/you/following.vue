<template>
    <div >
    <div >
    <div class='filter'>
        <h1 class="title">
            Hear what the people you follow have posted
        </h1>
<input type="text" name=""  class=' input' placeholder="Filter" id="">
    </div >

    <div class="image__container">
<Image artist='wizzy'  circle='circle' src="https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg"/>
<Image artist='wizzy' circle='circle' src="https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg"/>
    </div>
    </div>
    
    </div>
</template>






<script>
import Image from "../pages/image" 
export default {
    data(){
        return{
            
    }
        },
        components:{Image}
}
</script>


<style scoped>
.image__container{
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  margin:10px 5px;
  justify-content:flex-start ;
  padding-top:10px ;
  padding-bottom:50px ;

}
.title{
    font-size: 20px;
    color:rgb(168, 165, 165);
    font-weight: 3;
    padding-top: 20px;
    padding-bottom: 10px;
}
.filter{
    display: flex;
    justify-content: space-between;
}
.input{
    margin-top:20px;
    height:26px;
    border-radius:3px;
    border:1px solid rgb(194, 190, 190);
    width:24%

}
</style>