<template>
    <div class="EditParamRoot">
        <div class="MenuButtons">
            <div class="component1" v-if="EditTool1">
                <button v-if="buttonVisible" @click="NavButtonClick(1)">1</button>
                <div v-if="componentVisible">
                    <button @click="NavButtonClick(0)">Назад</button>
                    <ModelInfo></ModelInfo>
                </div>
            </div>
            <div class="component2" v-if="EditTool2">
                <button v-if="buttonVisible" @click="NavButtonClick(2)">2</button>
                <div v-if="componentVisible">
                    <button @click="NavButtonClick(0)">Назад</button>
                    <SceneParam></SceneParam>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModelInfo from './EditParamContainer/ModelInfo.vue'
import SceneParam from './EditParamContainer/SceneParam.vue'
export default{
    components:{
        ModelInfo,
        SceneParam,
    },
    data(){
        return{
            buttonVisible:true,
            componentVisible: false,
            EditTool1: true,
            EditTool2: true
        }
    },
    methods:{
        NavButtonClick(val){
            switch (val){
                case 0:
                    this.componentVisible = false;
                    this.buttonVisible = true;
                    this.EditTool1 = this.EditTool2 = true
                    break;
                case 1:
                    this.EditTool2 = false;
                    this.componentVisible = true;
                    this.buttonVisible = false;
                    break;
                case 2:
                    this.EditTool1 = false;
                    this.componentVisible = true;
                    this.buttonVisible = false;
                    break;
            }
        },
    }
}
</script>

<style>

</style>
