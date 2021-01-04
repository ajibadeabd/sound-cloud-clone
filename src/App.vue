<template>
<div >
<Navbar/>
<div class="space"></div>


<div class="body">


<router-view/>
<div class="space_control"></div>
</div>

<Control/>
</div>

</template>

<script>
import Navbar from './components/pages/navbar'
import Control from './components/pages/control'
export default {
  name: 'App',
  components: {
    Navbar,Control
  }
}
</script>

<style scope>
.body{
  width:96%;
  margin:auto;
}

*{
  padding:0px;
  margin:0px;
}
.space{
  height: 49px;
}
.space_control{
  height: 80px;
}
</style>
