<template>
    <div class="threeContainerRoot">
        <button @click="sayHello()"></button>
    </div>
</template>

<script>
import errorHandler from '../scripts/errorHandler.js'
export default {
    data(){

    },
    methods:{
        sayHello(){
            errorHandler('', '', '', "canvas")
        }
    }
}
</script>

<style>

</style>
