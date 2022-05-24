<template>
    <div class="ToolPanelRoot">
        <editMenu v-if="editMenuVisible"></editMenu>
        <authorisation-page 
        v-if="AuthorisationPageVisible"
        :title="title"
        :way="way"
        ></authorisation-page>
        <div class="homePage" v-if="HPEvisible">
            <HomePageEdit></HomePageEdit>
        </div>
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
        this.emitter.on("OpenHomePage", data =>{
            if(data == true){
                this.AuthorisationPageVisible = false;
                this.editMenuVisible = false;
                this.HPEvisible = true;
            }
        })
        this.emitter.on("MarketStore", data =>{
            if(data == true){
                this.AuthorisationPageVisible = false;
                this.editMenuVisible = false;
                this.HPEvisible = true;
            }
        })
        this.emitter.on("OpenAboutUS", data =>{
            if(data == true){
                this.AuthorisationPageVisible = false;
                this.editMenuVisible = false;
                this.HPEvisible = true;
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
    right: 1vw;
    top: 12%;
    bottom: 3px;
    background-color: #fbfaff;
}
</style>
