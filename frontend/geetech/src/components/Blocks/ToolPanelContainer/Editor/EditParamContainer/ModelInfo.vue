<template>
    <div class="ModelInfoRoot">
        <p>Информация о модели</p>
        <li v-for="item in modelInfo" :key="item.id">
            {{ item }}
        </li>
    </div>
</template>

<script>
import getCookie from "@/components/Blocks/scripts/getCookie.js"
export default{
    data(){
        return{
            modelInfo:[]
        }
    },
    created: function(){
        let data = JSON.parse(getCookie('modelParams'));
        for (let key in data){
            this.modelInfo.push(key+": "+ data[key])
        }
    }
}
</script>

<style>

</style>
