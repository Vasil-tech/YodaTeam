<template>
  <div class="navMenuRoot">
    <div class="leftPart">
      <div class="logo">
        <img src="@/assets/logo.png"/>
      </div>
      <div class="chapters">
        <div class="editor" @click="Editor()">
          <a class="chapter">Редактор</a>
        </div>
        <div class="market">
          <a class="chapter">Модели</a>
        </div>
      </div>
    </div>
    <div class="rightPart">
      <div class="entire" @click="Auth(0)">
        <a class="entire">Вход</a>
          <div class="regist" @click="Auth(1)">
            <a class="regist">Регистрация</a>
          </div>
      </div>
    </div>
      <div class="line">
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
      Auth(type){
        this.emitter.emit("OpenAuthorisation", type)
      },
      Editor(){
        this.emitter.emit("OpenEditor", true)
      },
    }
}
</script>

<style>
.line{
  position: fixed;
  top: 10vh;
  left: 1vw;
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
  width: 25%;
  right: 1vw;
  top: 2vw;
}
a.entire{
  float: left;
  padding-top:6pt;
  vertical-align:middle;
  text-align: center;
  position: relative;
  left: 2vw;
  border: 1px solid #1CBAC4;
  border-radius: 50px;
  background-color: #1CBAC4;
  width: 90pt;
  height: 28pt;
  color: white;
}
.entire:hover{
  cursor: pointer;
}
div.regist{
  position: sticky;
  left: 1vw;
}
a.regist{
  padding-top:6pt;
  vertical-align:middle;
  text-align: center;
  position: relative;
  float: right;
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
}
a.chapter{
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
}
.leftPart{
  float: left;
  position: fixed;
  width: 72vw;
  left: 1vw;
  top: 1.5vw;
}
</style>