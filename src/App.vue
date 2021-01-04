<template>
<div >
<Navbar/>
<div class="space"></div>

<router-view/>
<div class="space_control"></div>

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
*{
  padding:0px;
  margin:0px;
}
.space{
  height: 49px;
}
.space_control{
  height: 60px;
}
</style>
