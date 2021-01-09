<template>
    <div class="container">



<div class="left">
                
            </div>

            <!-- // second part -->
<div class="right">
<div class="followRefresh">
    <div class="follow">
<i class="material-icons">people_alt</i>
<div class="follow">who to follow</div>

    </div>

<div class="refresh">
<i class="material-icons">refresh</i>
<div class="">
    Refresh list</div>
</div>
    
</div>
<div class="line__through"></div>

<div class="ppltofll">

        <div class="image__follow">
        <div class="image">
            <img src="https://a-v2.sndcdn.com/assets/images/hp_creator_image-f3d92e09.jpg" alt="">
        </div>
            <div class="nameFollwers">
                <div class="name"> abdullah</div>
                <div class="tracklikes">

                    <div class="likes">
                        <i class=" pplmat material-icons">people_alt</i>
                          <div>53k</div></div>

                    <div class="track">28</div>
                </div>
        </div>
    </div>
    <div class="follow__btn">
                        <i class=" ffl md-24 material-icons">person_add</i>

        <div class="ffl">follow</div>
    </div>
</div>


<div class="ppltofll">

        <div class="image__follow">
        <div class="image">
            <img src="https://a-v2.sndcdn.com/assets/images/hp_creator_image-f3d92e09.jpg" alt="">
        </div>
            <div class="nameFollwers">
                <div class="name"> abdullah</div>
                <div class="tracklikes">

                    <div class="likes">
                        <i class=" pplmat material-icons">people_alt</i>
                          <div>53k</div></div>

                    <div class="track">28</div>
                </div>
        </div>
    </div>
    <div class="follow__btn">
                        <i class=" ffl md-24 material-icons">person_add</i>

        <div class="ffl">follow</div>
    </div>
</div>


<div class="ppltofll">

        <div class="image__follow">
        <div class="image">
            <img src="https://a-v2.sndcdn.com/assets/images/hp_creator_image-f3d92e09.jpg" alt="">
        </div>
            <div class="nameFollwers">
                <div class="name"> abdullah</div>
                <div class="tracklikes">

                    <div class="likes">
                        <i class=" pplmat material-icons">people_alt</i>
                          <div>53k</div></div>

                    <div class="track">28</div>
                </div>
        </div>
    </div>
    <div class="follow__btn">
                        <i class=" ffl md-24 material-icons">person_add</i>

        <div class="ffl">follow</div>
    </div>
</div>


<div class="ppltofll">

        <div class="image__follow">
        <div class="image">
            <img src="https://a-v2.sndcdn.com/assets/images/hp_creator_image-f3d92e09.jpg" alt="">
        </div>
            <div class="nameFollwers">
                <div class="name"> abdullah</div>
                <div class="tracklikes">

                    <div class="likes">
                        <i class=" pplmat material-icons">people_alt</i>
                          <div>53k</div></div>

                    <div class="track">28</div>
                </div>
        </div>
    </div>
    <div class="follow__btn">
                        <i class=" ffl md-24 material-icons">person_add</i>

        <div class="ffl">follow</div>
    </div>
</div>
            </div>
            


    </div>
</template> 

<script>
// import Image from '../pages/image'
export default {
// components:{Image}
}
</script>

<style  scoped>
*{
    margin: 0px;
}
img{
    width:100%;
    height:100%;
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
height: 500px;
position: fixed;
right: 0;
border-left:1px solid rgb(202, 197, 197) ;

}
.left{
    /* background-color: rgb(75, 24, 24); */
    width: 60.5%;
height: 1000px;

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


.refresh,.follow,.tracklikes,.likes,.image__follow,.ppltofll,.follow__btn{
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
    margin-bottom:20px;

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
}
</style>