<template>
    <div>
               
    <div class="image__Allimage">
    <div class="image__chart">
<Image v-bind:artist="'Top 50'" 
v-bind:songlink="'link to song'"
 v-bind:src="'https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg'"/>
        </div>   



 <div class="image__chart">
<Image v-bind:artist="'Top 50'" 
v-bind:songlink="'link to song'"
 v-bind:src="'https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg'"/>
        </div>   

 <div class="image__chart">
<Image v-bind:artist="'Top 50'" 
v-bind:songlink="'link to song'"
 v-bind:src="'https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg'"/>
        </div>   


         <div class="image__chart">
<Image v-bind:artist="'Top 50'" 
v-bind:songlink="'link to song'"
 v-bind:src="'https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg'"/>
        </div>   

         <div class="image__chart">
<Image v-bind:artist="'Top 50'" 
v-bind:songlink="'link to song'"
 v-bind:src="'https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg'"/>
        </div>   

         <div class="image__chart">
<Image v-bind:artist="'Top 50'" 
v-bind:songlink="'link to song'"
 v-bind:src="'https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg'"/>
        </div>   
            </div>
    </div>
</template>


<script>
import Image from "../../pages/image"
export default {
    data(){
        return {

        }
    },
    components:{Image},
}
</script>
<style scoped>
.image__Allimage{
 display: flex;
    overflow-y: hidden;
}
</style>