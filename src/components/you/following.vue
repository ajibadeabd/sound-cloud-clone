   <template>
    <div >
    <div >
        <h1>
            Recently played
        </h1>

    <div class="image__c">

<div class="each">
 <Image artist='wizzy' circle='circle' src="https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg"/>

</div>

<div class="each">
 <Image artist='wizzy' circle='circle' src="https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg"/>

</div>
<div class="each">
 <Image artist='wizzy' circle='circle' src="https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg"/>

</div>
<div class="each">
 <Image artist='wizzy' circle='circle' src="https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_a-3bb2d420.jpg"/>

</div>



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
.image__c{
 display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

}
.each{
  /* margin:7px; */
  width:200px;
}
</style>