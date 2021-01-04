<template>
    
    <div class="container">


<div class="action">

<ul>
    <li class="action__item">Pro Plans</li>
    <li class="action__item">Your Track</li>
    <li class="action__item">Mastering</li>
    <li class="action__item">Upload</li>
</ul>
<div class="creator">
Creator on SoundClound</div>

</div>

<div class="upload">
<div>
<h3>0% of free uploads used</h3>
<h3 class='progress__bar'></h3>
<p>
<a href="/">
Try Pro Unlimited</a>
for unlimited uploads</p>
</div>
 
<li class="trypro">
Try Pro Unlimited</li >


</div>
<div class="choose_file__upload">
<div class="drag__drop">
Drag and drop your track & album here</div>

<div class="choose__filetouploads">
or choose file to upload
</div>
<div class="checkstuff">
<input type="checkbox" name="" class="checkbox"/>
Make a playlist when multiple file are selected
<br/>
<br/>
privacy: <input type="radio" name="public" id="">public
<input type="radio" name="private" id="">private
</div>

<div class="provide__flac">
Provide FLAC ,WAV,ALAC,or AIFF for heighest audio quality.. 
<a href="" class="learn__more">Learn more about lossless HD</a>

</div>
</div>
<div class="end">
<a href="" class="support">
Support file types and sizes 
<a class="bold">-</a>
Upload troubleshooting tips
<a class="bold">-</a>

Copyright FAQs
</a>
<br/>
By uploading, you  confirm that your sounds comply with our 
<a href="" class="terms">Terms of Use</a>
and you don't infringe anyone else's rights.
</div>


<div class="ends">
Legal ⁃ Privacy ⁃ Cookies ⁃ Imprint ⁃ Creator Resources ⁃ Blog ⁃ Charts ⁃ Popular searches
<br/>

<router-link to='/' class="language">
Language
</router-link>: English (US)</div>

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
.provide__flac{
    text-align: center;
    padding-top: 30px;

}
.bold{
    font-weight: 30px;
    font-size:20px;
}
.support{
    text-decoration: none;
    color:blue;
    padding-bottom:20px;
}
.terms{
    
    text-decoration: none;
    color:blue;
}
.end{
    width:80%;
    margin-bottom:20px;
    margin-left:10%;
    padding:10px 0px 20px 0px;
    border-bottom:1px solid grey;
}
.learn__more{
    text-decoration: none;
    color:blue;
}
.action{
    display:flex;
    border-bottom:1px rgb(224, 221, 221) solid;
    padding:10px;
    padding-bottom:0px;
    justify-content: space-between;

}
ul{
    display:flex;

}
.action__item:hover , .creator:hover{ 
    border-bottom:1px rgb(245, 6, 6) solid;

}
.action__item{
    padding-bottom:5px;

list-style: none;
margin-bottom:0px;
margin-right:8px;
font-size:20px;

}
.creator{

}
.choose_file__upload{
    margin:auto;
    margin-top:10px;
    width:80%;
    border:1px solid rgb(235, 229, 229);
    padding:10px;
    height: 200px;
}
.upload{
    margin:auto;
    margin-top:100px;
    margin-bottom:40px;
    width:80%;
    border:1px solid rgb(235, 229, 229);
    padding:10px;
    display:flex;
    justify-content: space-between;
}
.trypro{

    text-align: center;
    border:1px solid orange;
    border-radius:5px;
    height: 25px;
    color:orange;
    padding-top: 5px;
    list-style: none;

}
.progress__bar{
    border:2px grey solid
}
.upload>div> p >a{
    text-decoration: none;
    color:blue
    ;
}
.choose__filetouploads{
    color: white;
    background-color:orangered;
    margin:auto;
    width:170px;
    padding:7px;
    border-radius:5px;
    text-align: center;
    border-width: 0px;
    margin-top:9px;
}
.drag__drop{
    text-align: center;
    padding:5px;
    
}
.checkstuff{
    text-align: center;
    padding:10px;
}
.ends{
text-align:left;
margin:auto;
margin-bottom:10px;
width:80%;
}
.language{
    text-decoration:none;
    color:blue;
    list-style:none;
}
</style>