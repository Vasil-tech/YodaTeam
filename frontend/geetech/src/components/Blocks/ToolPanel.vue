<template>
    <div class="ToolPanelRoot">
        <editMenu></editMenu>
        <authorisation-page></authorisation-page>
    </div>
</template>

<script>
import editMenu from "./ToolPanelContainer/Editor/EditParam.vue" 
import AuthorisationPage from "./ToolPanelContainer/AuthorisationPage.vue"
export default ({
    components:{
        editMenu,
        AuthorisationPage
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
    width: 25%;
    height: 85%;
    right: 1%;
    top: 12%;
    bottom: 3px;
    border: 2px solid #3A506B;
   
    
    
}
</style>
