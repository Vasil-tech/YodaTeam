<template>
    <div class="ToolPanelRoot">
        <editMenu></editMenu>
    </div>
</template>

<script>
import editMenu from "./ToolPanelContainer/Editor/EditParam.vue" 
export default ({
    components:{
        editMenu
    },
    data(){

    }
})
</script>
<style>
.ToolPanelRoot{
    position: fixed;
     float: right;
    width: 25%;
    height: 85%;
    right: 1%;
    top: 12%;
    bottom: 3px;
    border: 2px solid #3A506B;
   
    
    
}
</style>
