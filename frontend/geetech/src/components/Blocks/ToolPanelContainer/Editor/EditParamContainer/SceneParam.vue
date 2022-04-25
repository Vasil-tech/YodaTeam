<template>
    <div class="SceneParamRoot">
        <p>Смена цвета фона сцены</p>
        <div class="colorBar">
            <button @click="changeColor('grey')">серый</button>
            <button @click="changeColor('red')">красный</button>
            <button @click="changeColor('white')">белый</button>
        </div>
    </div>
</template>

<script>
export default{
    data(){

    },
    methods:{
        changeColor(color){
            try{
                this.emitter.emit("SceneBackgroundColor", color);
            }
            catch(e){
                console.error('asufhkj'); //прокинуть обработчик ошибок
            }
        }
    }
}
</script>
