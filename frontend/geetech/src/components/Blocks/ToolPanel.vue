<template>
    <div class="ToolPanelRoot">
        <HomePageEdit></HomePageEdit>
      <!--<editMenu></editMenu>-->
    </div>
</template>

<script>
import HomePageEdit from"./ToolPanelContainer/HomePageEdit.vue"
//import editMenu from "./ToolPanelContainer/Editor/EditParam.vue" 

export default ({
    components:{
        HomePageEdit
    },
    data(){

    },
    methods:{
        
    }
})
</script>
<style>
.ToolPanelRoot{
    position: fixed;
     float: right;
    width: 24%;
    height: 85%;
    right: 1%;
    top: 12%;
    bottom: 3px;
    border: 2px solid #1CBAC3;  
}
</style>
