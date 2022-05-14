<template>
<div class="mainCont">
  <MainContainer></MainContainer>
</div>
</template>

<script>
import MainContainer from './components/MainContainer.vue'
import { emitter } from './main'
export default {
  name: 'App',
  components: {
    MainContainer
  }
}
window.onresize = function(){
  emitter.emit("Resize", true)
}
</script>

<style>
.mainCont{
  position:absolute;
}
</style>
