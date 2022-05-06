<template>
  <div class="navMenuRoot">
    <nav class="Navbar">
      <ul>
        <li><a @click="Editor()">Редактор</a></li>
        <li><a>Модели</a></li>  
        <li class="RightMenu" @click="Auth(0)"><a>Регистрация</a></li>
        <li class="RightMenu" @click="Auth(1)"><a>Авторизация</a></li>
      </ul>
    </nav>
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
.Navbar{
  position: fixed;
  top: 0;
  left: 1%;
  right: 1%;
  overflow: hidden;
  width: 98%;
  height: 10%;
  background-color: #F5F5F5;
  border-bottom: 2px solid #3A506B;
}
.Navbar li{
  display:inline;

}
.Navbar ul{
  margin: 0;
  padding: 0;
  list-style-type: none;
  
}
.Navbar a{
  float: left;
  color: black;
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 20px;
  font-size: 22px;
}
.RightMenu{
  float: right;
  text-decoration: none;
}
</style>