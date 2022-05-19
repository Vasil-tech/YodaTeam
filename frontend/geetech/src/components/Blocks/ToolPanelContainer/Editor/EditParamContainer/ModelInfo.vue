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
.ModelInfoRoot p{
    text-decoration: none;
    margin-top: 5%;  
    margin-bottom: 5%;
    border-top: 2px solid #B0E0E6;
    border-bottom: 2px solid #B0E0E6;
}

.ModelInfoRoot li {
font-family: 'Montserrat';
    font-size: 16px;
    margin-top: 3%;
}
</style>
