<template>
    <div class="EditParamRoot">
        <div class="MenuButtons">
            <div class="component1" v-if="EditTool1">
                <div class="NavBut1">
                    <button v-if="buttonVisible" @click="NavButtonClick(1)">Детали</button>
                </div>
                <hr>
                <div v-if="componentVisible">
                    <div class="BtnBack">
                    <button @click="NavButtonClick(0)">🢔 Назад</button>
                    </div>
                    <ModelInfo></ModelInfo>
                </div>
            </div>
            <div class="component2" v-if="EditTool2">
                <div class="NavBut2">
                    <button v-if="buttonVisible" @click="NavButtonClick(2)">Настройки</button>
                </div>
                <hr>
                <div v-if="componentVisible">
                    <div class="BtnBack">
                        <button @click="NavButtonClick(0)">🢔 Назад</button>
                    </div>
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
        downloadButtonClick(){

        }
    }
}
</script>

<style>
.NavBut1 button{
    text-align: left;
    position: relative;
    width: 100%;
    margin: 0;
    padding: 5px;
    background-color: #fbfaff;

}
.NavBut2 button{
    text-align: left;
    position: relative;
    width: 100%;
    margin: 0;
    padding: 5px;
    background-color: #fbfaff;

}
.component1 hr{
    width: 100%;
    margin: 0;
    border-top: 1px solid #B0E0E6;
}
.component2 hr{
    width: 100%;
    margin: 0;
    border-top: 1px solid #B0E0E6;
    
}
button{
     background-color: #fbfaff;
}

button:hover{
    background-color: #B0E0E6;
}
.BtnBack button{
    background-color: #fbfaff;
}
.BtnBack button:hover{
    background-color: #B0E0E6;
}



</style>
