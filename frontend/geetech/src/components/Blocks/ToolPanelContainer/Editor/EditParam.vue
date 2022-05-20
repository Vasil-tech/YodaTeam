<template>
    <div class="EditParamRoot">
        <div class="MenuButtons">
            <hr v-if="HRvisible">
            <div class="component1" v-if="EditTool1">
                    <div class="NavBut1">
                        <button v-if="buttonVisible" @click="NavButtonClick(1)">Детали</button>
                    </div>
                <hr>
                <div v-if="componentVisible">
                    <div class="BtnBack">
                    <button @click="NavButtonClick(0) ">Назад</button>
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
                        <button @click="NavButtonClick(0)">Назад</button>
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
            EditTool2: true,
            HRvisible: true
        }
    },
    methods:{
        NavButtonClick(val){
            switch (val){
                case 0:
                    this.componentVisible = false;
                    this.buttonVisible = true;
                    this.EditTool1 = this.EditTool2 = true
                    this.HRvisible = true;
                    break;
                case 1:
                    this.EditTool2 = false;
                    this.componentVisible = true;
                    this.buttonVisible = false;
                    this.HRvisible=false;
                    break;
                case 2:
                    this.EditTool1 = false;
                    this.componentVisible = true;
                    this.buttonVisible = false;
                    this.HRvisible = false;
                    break;
            }
        },
        downloadButtonClick(){

        }
    }
}
</script>

<style>
.EditParamRoot{
    font-family: 'Montserrat', 'sans-serif';
  font-size: 18pt;
  font-style: normal;
}

.NavBut1 button{
    text-align: left;
    position: relative;
    width: 100%;
    margin: 0;
    padding: 10px;
    background-color: #fbfaff;
}

.NavBut2 button{
    text-align: left;
    position: relative;
    width: 100%;
    margin: 0;
    padding: 10px;
    background-color: #fbfaff;

}

.NavBut1 button:hover {
    background-color: #B0E0E6;
}
.NavBut2 button:hover {
    background-color: #B0E0E6;
}
.MenuButtons     hr{
    position: relative;
    width: 100%;
    margin: 0;
    border-top: 1px solid #B0E0E6;  
}
.component1 hr{
    position: relative;
    width: 100%;
    margin: 0;
    border-top: 1px solid #B0E0E6;    
}
.component2 hr{
    position: relative;
    width: 100%;
    margin: 0;
    border-top: 1px solid #B0E0E6;
    
}
button{
     background-color: #fbfaff;
}

.BtnBack button{
    background-color: #fbfaff;
    background-image: url("@/assets/ArrowBack.png");
    background-repeat: no-repeat;
    padding-left: 5%;
}
.BtnBack button:hover{
    background-color: #B0E0E6;
}



</style>
