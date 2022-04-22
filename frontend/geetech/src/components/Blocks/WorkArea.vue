<template>
    <div class="workAreaRoot">
        <div class="threeContainer">
            <three-container></three-container>
        </div>
    </div>
</template>

<script>
//import ThreeContainer from './WorkAreaContainer/ThreeContainer.vue'
import { defineAsyncComponent } from 'vue'

export default{
    components:{
        ThreeContainer: defineAsyncComponent(()=> import('./WorkAreaContainer/ThreeContainer.vue'))
    },
    data(){

    }
}
</script>

<style>

</style>
