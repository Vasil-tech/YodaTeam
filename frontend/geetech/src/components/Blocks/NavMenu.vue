<template>
  <div class="navMenuRoot">
    <div  class="leftPart">
        <div class="logo">
          <img @click="Home" src="@/assets/logo.png">
        </div>
      <div class="chapters">
        <div class="editor" @click="Editor()">
          <a id="Aeditor" class="chapter">Редактор</a>
        </div>
        <div class="market" @click="Market()">
          <a id="AMarket" class="chapter">Модели</a>
        </div>
        <div class="about" @click="About()">
          <a id="AboutUs" class="chapter">О нас</a>
        </div>
      </div>
    </div>
    <div class="rightPart">
      <div class="regist">
        <a class="regist"  @click="Auth(0)">Регистрация</a>
    
        <div class="entire" >
          <a class="entire" @click="Auth(1)">Вход</a>
        </div>
          </div>
          <div class="line">
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data(){
      return{

      }
    },
    
    methods:{
      Home(){
        this.emitter.emit("OpenHomePage", true)
        this.emitter.emit("SmenaCveta", false);
        this.emitter.emit("SmenaCveta1", false);
        this.emitter.emit("SmenaCveta2", false);
      },
      Auth(type){
        this.emitter.emit("OpenAuthorisation", type);
        this.emitter.emit("SmenaCveta", false);
        this.emitter.emit("SmenaCveta1", false);
        this.emitter.emit("SmenaCveta2", false);
      },
      Editor(){
        this.emitter.emit("OpenEditor", true);
        this.emitter.emit("SmenaCveta", true);
        this.emitter.emit("SmenaCveta1", false);
        this.emitter.emit("SmenaCveta2", false);
      },
      Market(){
        this.emitter.emit("MarketStore", true);
        this.emitter.emit("SmenaCveta1", true);
        this.emitter.emit("SmenaCveta", false);
        this.emitter.emit("SmenaCveta2", false);
      },
      About(){
        this.emitter.emit("OpenAboutUS", true);
        this.emitter.emit("SmenaCveta", false);
        this.emitter.emit("SmenaCveta1", false);
        this.emitter.emit("SmenaCveta2", true);
      }
    },
    
    created: 
    function(){
      this.emitter.on("SmenaCveta", data => {
        if(data == true)
        document.getElementById("Aeditor").style.fontWeight = "bold";
        else
        document.getElementById("Aeditor").style.fontWeight = "normal";
      })
      this.emitter.on("SmenaCveta1", data => {
        if(data == true)
        document.getElementById("AMarket").style.fontWeight = "bold";
        else
        document.getElementById("AMarket").style.fontWeight = "normal";
      })
      this.emitter.on("SmenaCveta2", data => {
        if(data == true)
        document.getElementById("AboutUs").style.fontWeight = "bold";
        else
        document.getElementById("AboutUs").style.fontWeight = "normal";
      })
  }
}


</script>

<style>
.logo{
  width: 16%;
}
img{
  z-index: 2;
}

.logo:hover{
  cursor: pointer;
}


.line{
  position: relative;
  float: right;
  right: 1vw;
  top: 1vw;
  width: 98vw;
  border: 1px solid #BDBDBD;
}
.rightPart{
  font-family: 'Montserrat';
  font-size: 16pt;
  font-style: normal;
  font-weight: 500;
  position: fixed;
  float: right;
  width: 50%;
  right: 0vw;
  top: 3vh;
}
a.entire{
  float: right;
  right: 10%;
  padding-top:6pt;
  vertical-align:middle;
  text-align: center;
  position: relative;
  border: 1px solid #71D4DA;
  border-radius: 50px;
  background-color: #71D4DA;
  width: 90pt;
  height: 28pt;
  color: white;
}
.market:hover{
  cursor: pointer;
}
.entire:hover{
  cursor: pointer;
}
a.regist{
  padding-top:6pt;
  vertical-align:middle;
  text-align: center;
  position: relative;
  float: right;
  right: 3vw;
  border: 1px solid #1CBAC4;
  border-radius: 50px;
  height: 28pt;
  width: 135pt;
}
.regist:hover{
  cursor: pointer;
}
.chapters{
  position: fixed;
  top: 4vh;
  float: left;
  left: 1%;
  z-index: -1;
}
a.chapter{
  width: 90pt;
  height: 28pt;
  font-family: 'Montserrat';
  font-size: 15pt;
  font-style: normal;
  font-weight: 500;
  z-index: 1;
}
.market{
  position: relative;
  float: left;
  left: 22vw;
}
.editor{
  position: relative;
  float: left;
  left: 12vw;
}
.about{
  position: relative;
  float: left;
  left: 32vw;
}
.about:hover{
  cursor: pointer;
}
.editor:hover{
  cursor: pointer;
}
.leftPart{
  float: left;
  position: fixed;
  width: 72vw;
  left: 1vw;
  top: 1.5vw;
}
</style>