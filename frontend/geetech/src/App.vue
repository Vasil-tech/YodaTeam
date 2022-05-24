<template>
<div class="mainCont">
  <MainContainer></MainContainer>
</div>
</template>

<script>
import MainContainer from './components/MainContainer.vue'
import { emitter } from './main'
import { canvasHeight } from './components/Blocks/scripts/bus.js';
import { canvasWidht } from './components/Blocks/scripts/bus.js'
export default {
  name: 'App',
  components: {
    MainContainer
  }
}
window.onload = function(){
  canvasHeight();
  canvasWidht();
}
window.onresize = function(){
  canvasHeight();
  canvasWidht();
  emitter.emit("Rerender", true)
}

window.onkeydown = function( event ) {
    if ( event.keyCode == 27 ) {
        emitter.emit("FullScreenCanvas", false)
    }
};

</script>

<style>
.mainCont{
  position:absolute;
}
</style>
