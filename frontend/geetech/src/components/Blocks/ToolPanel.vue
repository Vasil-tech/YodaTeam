<template>
    <div class="ToolPanelRoot">
        <div class="homePage" v-if="HPEvisible">
            <HomePageEdit></HomePageEdit>
        </div>
        <editMenu v-if="editMenuVisible"></editMenu>
        <authorisation-page 
        v-if="AuthorisationPageVisible"
        :title="title"
        :way="way"
        ></authorisation-page>
    </div>
</template>

<script>
import editMenu from "./ToolPanelContainer/Editor/EditParam.vue" 
import AuthorisationPage from "./ToolPanelContainer/AuthorisationPage.vue"
import HomePageEdit from "./ToolPanelContainer/HomePageEdit.vue"
export default ({
    components:{
        editMenu,
        AuthorisationPage,
        HomePageEdit
    },
    data(){
        return{
            HPEvisible: true,
            editMenuVisible: false,
            AuthorisationPageVisible: false,
            way: String,
            title: String,
            defWinVisible: true
        }
    },
    methods:{
        
    },
    created: function(){
        this.emitter.on("OpenAuthorisation", data =>{
        if(data == 0){
            this.HPEvisible = false;
            this.AuthorisationPageVisible = true;
            this.editMenuVisible = false;
            this.way = "Registration"
            this.title = "Регистрация"
            }
        else if(data == 1){
            this.HPEvisible = false;
            this.AuthorisationPageVisible = true;
            this.editMenuVisible = false;
            this.way = "Authorisation"
            this.title = "Вход"
        }
        })
        this.emitter.on("OpenEditor", data => {
            if(data){
                this.HPEvisible = false;
                this.AuthorisationPageVisible = false;
                this.editMenuVisible = true;
            }
        })
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
