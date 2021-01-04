<template>
    <div >
    <div >
        <h1>
            Recently played
        </h1>

    <div class="image__container">
<Image artist='wizzy' songlink='link to song' src="https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg"/>
<Image artist='wizzy' songlink='link to song' src="https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg"/>
<Image artist='wizzy' songlink='link to song' src="https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg"/>
<Image artist='wizzy' songlink='link to song' src="https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg"/>
<Image artist='wizzy' songlink='link to song' src="https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg"/>
<Image artist='wizzy' songlink='link to song' src="https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg"/>
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
  padding-top:10px ;

}
</style>