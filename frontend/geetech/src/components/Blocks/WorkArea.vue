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
.workAreaRoot{
    position: fixed;
    width: 72%;
    height: 85%;
    float: left;
    left: 1%;
    bottom: 0;
    border: 2px dotted #3A506B;
    top: 12%;
    
}
</style>
