<template>
<div class="mainCont">
  <MainContainer></MainContainer>
</div>
</template>

<script>
import MainContainer from './components/MainContainer.vue'

export default {
  name: 'App',
  components: {
    MainContainer
  }
}
</script>

<style>
.mainCont{
  position:absolute;
}
</style>
