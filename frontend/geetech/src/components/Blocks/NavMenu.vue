<template>
  <div class="navMenuRoot">
    <nav class="Navbar">
      <ul>
        <li><a @click="Editor()">Редактор</a></li>
        <li><a>Модели</a></li>  

          <div class="RightMenu">
              <li><a class="vhod" @click="Auth(0)">Вход</a></li>
              <li><a class="registration" @click="Auth(1)">Регистрация</a></li>
          </div>
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
  top: 1%;
  left: 1%;
  right: 1%;
  overflow: hidden;
  width: 98%;
  height: 8%;
  background-color: #FFFFFF;
  border-bottom: 2px solid #1CBAC3;
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
  padding: 15px;
  font-family: 'Montserrat';
  font-size: 18px;
  margin-bottom: 1%;
  margin-right: 15px;
}

.RightMenu{
  float: right;
  text-decoration: none; 
  
}

.vhod{
  box-sizing: border-box; 
  background: #71D4DA;
  border-radius: 40px;
  width: 100px;
}

.registration{
  box-sizing: border-box;
  border: 1px solid #1CBAC4;
  border-radius: 40px;
  width: 140px;
}
</style>