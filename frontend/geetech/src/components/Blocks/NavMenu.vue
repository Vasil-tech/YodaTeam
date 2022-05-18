<template>
  <div class="navMenuRoot">
    <div class="leftPart">
      <div class="logo">
        <img src="@/assets/logo.png"/>
      </div>
      <div class="chapters">
        <div class="editor" @click="Editor()">
          <a id="Aeditor" class="chapter">Редактор</a>
        </div>
        <div class="market">
          <a class="chapter">Модели</a>
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
            editorBold: false,
      }
    },
    created: function(){
      if(this.editorBold == true){
        let ed = document.getElementById("Aeditor");
        ed.style.background = "red";
      }
    },
    methods:{
      Auth(type){
        this.emitter.emit("OpenAuthorisation", type)

      },
      Editor(){
        this.emitter.emit("OpenEditor", true);
        this.editorBold = true
      },
    }
}


</script>

<style>
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
}
a.chapter{
  width: 90pt;
  height: 28pt;
  font-family: 'Montserrat';
  font-size: 15pt;
  font-style: normal;
  font-weight: 500;
}
.market{
  position: relative;
  float: left;
  left: 25vw;
}
.editor{
  position: relative;
  float: left;
  left: 15vw;
}
.editor:hover{
  cursor: pointer;
}
.logo{
  float: left;
  width:0%;
  top: 1%;
}
.leftPart{
  float: left;
  position: fixed;
  width: 72vw;
  left: 1vw;
  top: 1.5vw;
}
</style>