<template>



            <!-- // second part -->
<div class="right">
<div class="followRefresh">
    <div class="follow">
<i class="material-icons first-icon">people_alt</i>
<div class="follow">who to follow</div>

    </div>

<div class="refresh">
<i class="material-icons first-icon">refresh</i>
<div class="">
    Refresh list</div>
</div>
    
</div>
<div class="line__through"></div>

<!-- who to follow -->
<Follow/>
<Follow/>
<Follow/>
<Follow/>



<!-- // listening history -->
<div class="followRefresh">
    <div class="follow">
<!-- <i class="material-icons">listen</i> -->
<div class="follow">listening history</div>

    </div>

<div class="refresh">
<div class="">
    Refresh View All</div>
</div>
    
</div>
<div class="line__through"></div>


<div class="listening__container">

    <Listening />
    <Listening />
    <Listening />
    <Listening />





<div class="gomobile">
    Go mobile
</div>
<div class="line__through"></div>

<div class="googleapple">
    <button class="google">
        
    </button>
    <button class="apple">

    </button>
</div>

<div class="legal">
        Legal - Privacy - Cookies - Imprint - Creator Resources - Blog - Chart - Popular search
        <br>
        Language: English
     
    </div>
</div>
    </div>
</template> 

<script>
import Follow from './follow/follow'
import Listening from './listening/listening'
import SubDiscovery from '../pages/sundiscovery/subDiscovery'
export default {
components:{SubDiscovery,Follow,Listening}
}
</script>

<style  scoped>

*{
    margin: 0px;
}
img{
    width:100%;
    height:100%;
}
   .legal{
    color:rgb(212, 209, 209);
    padding-top: 20px;
    margin-top: 20px;
    border-top:1px solid rgb(189, 181, 181)

}
.gomobile{
    width:90%;
    margin: auto;
    padding:10px 0px;
    color:rgb(182, 179, 179);
    text-align: start;
    font: 20px;
}
.fimage{
    border-radius: 50%;

}
.image{
    height:40px;
    width:40px;
}
.container{
height: 500px;
width: 100%;
/* background-color: red; */
display: flex;
}
.right{
    /* background-color: rgb(157, 152, 152); */
    width: 40%;
height:100%;
position: fixed;
overflow-y: auto;
/* margin: 0px 0px 50px 0px; */
right: 0;
border-left:1px solid rgb(202, 197, 197) ;

}

.line__through{
    height: 2px;
    width:88%;
    margin:auto;
    background-color: rgb(224, 220, 220);
}
.followRefresh{
    width:88%;
    margin:auto;
    display:flex;
    justify-content: space-between;
    color:grey;
    font-size: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding:17px 5px 12px 5px;
}


.refresh,.follow,.tracklikes,.love,
.listening__plrc,.listening__item,
.likes,.image__follow,.ppltofll,.follow__btn{
    display: flex;
}
.follow__btn{
    background-color: white;
    border:1px solid grey;
    font-size:20px;
    border-radius: 4px;
    justify-content: space-between;
    width:90px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bolder;
    color:rgb(58, 50, 50);
    padding:3px;
    text-align: center;
    height: 25px;
    /* widows: 40px; */
}
.ppltofll{
    justify-content: space-between;
    margin:auto;
    margin-top:10px;
    margin-bottom:40px;

    width:88%
}
.tracklikes{
     font-size:15px;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    /* font-weight: bolder; */
    justify-content: space-between;
    width: 70px;
}
.likes{
    /* width:100px; */
    color:rgb(223, 130, 130)
}
.pplmat{
    height:2px !important;
    /* font-size: 20px; */
}
.listening__item{
    width:90%;
    margin:auto;
    margin-top: 10px;
    align-items: center;
    /* justify-content: space-between; */

}
.listening__image{
    height:65px;
    width:65px;
    margin-right: 10px;
}
.listening__detail{

}
.material-icons{
    /* height: 10px; */
    color:rgb(192, 189, 189);
    font-size:16px;
    margin-right: 3px;
}
.number{
    margin-right: 10px;
    font-size:15px;
    color:rgb(192, 189, 189);



}
.listening__plrc{
    margin-top:10px
}
.listening__name1{
    color:grey;
    font-size:20px;
    

}

.listening__name2{
    color:black;
    font-size:20px;

}
.listening__container{
    /* margin:0px !important; */
    padding-bottom:120px;
}
.google,.apple{
    width: 100px;
    height: 30px;
    background-repeat: no-repeat;
        background-position: center;
    background-size: cover;
    border-radius: 6px;
    background-image: url('https://a-v2.sndcdn.com/assets/images/appstore_badge-875ae97c.png');
}
.apple{
   
    background-image: url('https://a-v2.sndcdn.com/assets/images/google_play_badge-26379006.png');
}
.googleapple{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    margin-top: 10px;
}
.first-icon{
    /* color:blue; */
    margin-top:5px;
}
.md-24{
    font-size: 22px;
}
.image__Allimage{
 display: flex;
    overflow-y: hidden;
}
.image__chart{
   
}
.left{
    /* background-color: rgb(75, 24, 24); */
    width: 60.5%;
height: 1000px;
    /* background-color: red; */
    

}
.charts{
    margin:20px 0px;

}
.charts>h2{
font-size:30px;
color:rgb(73, 72, 72);
margin-bottom:10px;
}
.charts>p{
   font-size:20px;
color:rgb(180, 173, 173); 
}
.padimage{
    margin-bottom: 20px;
}
</style>