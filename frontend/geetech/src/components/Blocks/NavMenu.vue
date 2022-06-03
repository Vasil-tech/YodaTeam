<template><!--Блок гипертекстовой разметки-->
  <div class="navMenuRoot">
    <div  class="leftPart"><!--Div для упрощенного применения стилей меню(Левая сторона меню)-->
        <div class="logo">
          <img @click="Home" src="@/assets/logo.png"> <!--Использование логотипа как кнопки для возвращения на начальную страницу-->
        </div>
      <div class="chapters">
        <div class="editor" @click="Editor()"><!--Использование метода для открытия редактора-->
          <a id="Aeditor" class="chapter">Редактор</a>
        </div>
        <div class="market" @click="Market()"><!--Использование метода для открытия страницы "Модели"-->
          <a id="AMarket" class="chapter">Модели</a>
        </div>
        <div class="about" @click="About()"><!--Использование метода для открытия страницы "О нас"-->
          <a id="AboutUs" class="chapter">О нас</a>
        </div>
      </div>
    </div>
    <div class="rightPart"><!--Div для упрощенного применения стилей(Правая сторона меню)-->
      <div class="regist">
        <a class="regist"  @click="Auth(0)">Регистрация</a><!--Использование метода для открытия формы регистрации-->
        <div class="entire" >
          <a class="entire" @click="Auth(1)">Вход</a><!--Использование метода дял открытия формы авторизации-->
        </div>
          </div>
          <div class="line"><!--Объявление класса для выделения нижней части меню-->
      </div>
    </div>
  </div>
</template>
<script>//Блок скрипта
export default {
    data(){
      return{
      }
    },
    methods:{
      Home(){ //При вызове метода открытие доманей страницы и отмена выделения других пунктов меню
        this.emitter.emit("OpenHomePage", true)
        this.emitter.emit("SmenaCveta", false);
        this.emitter.emit("SmenaCveta1", false);
        this.emitter.emit("SmenaCveta2", false);
      },
      Auth(type){ //Открытие формы регистрации-авторизации в зависимости от нажатой кнопки и отмена выделения других пунктов меню
        this.emitter.emit("OpenAuthorisation", type);
        this.emitter.emit("SmenaCveta", false);
        this.emitter.emit("SmenaCveta1", false);
        this.emitter.emit("SmenaCveta2", false);
      },
      Editor(){ //Открытие редактора и выделение пункта меню
        this.emitter.emit("OpenEditor", true);
        this.emitter.emit("SmenaCveta", true);
        this.emitter.emit("SmenaCveta1", false);
        this.emitter.emit("SmenaCveta2", false);
      },
      Market(){ //Открытие пункта меню "Модели" и выделение 
        this.emitter.emit("MarketStore", true);
        this.emitter.emit("SmenaCveta1", true);
        this.emitter.emit("SmenaCveta", false);
        this.emitter.emit("SmenaCveta2", false);
      },
      About(){ //Открытие пункта меню "О нас" и выделение
        this.emitter.emit("OpenAboutUS", true);
        this.emitter.emit("SmenaCveta", false);
        this.emitter.emit("SmenaCveta1", false);
        this.emitter.emit("SmenaCveta2", true);
      }
    },
    created: 
    function(){ //Функция обработки выделения пунктов меню
      this.emitter.on("SmenaCveta", data => { //Выделение пункта меню "Редактор"
        if(data == true)
        document.getElementById("Aeditor").style.fontWeight = "bold";
        else
        document.getElementById("Aeditor").style.fontWeight = "normal";
      })
      this.emitter.on("SmenaCveta1", data => { //Выделение пункта меню "Модели"
        if(data == true)
        document.getElementById("AMarket").style.fontWeight = "bold";
        else
        document.getElementById("AMarket").style.fontWeight = "normal";
      })
      this.emitter.on("SmenaCveta2", data => { //Выделение пункта меню "О нас"
        if(data == true)
        document.getElementById("AboutUs").style.fontWeight = "bold";
        else
        document.getElementById("AboutUs").style.fontWeight = "normal";
      })
  }
}
</script>
<style> /*Блок каскадной таблицы стилей */
.logo{/*Стили для логотипа */
  width: 16%;
}
img{ /*Стили для каритинок */
  z-index: 2;
}
.logo:hover{ /*Стили для курсора при наведении на логотип */
  cursor: pointer;
}
.line{/*Стилия для черты в нижней части меню */
  position: relative;
  float: right;
  right: 1vw;
  top: 1vw;
  width: 98vw;
  border: 1px solid #BDBDBD;
}
.rightPart{/*Стили для правой части меню */
  font-family: 'Montserrat';
  font-size: 16pt;
  font-style: normal;
  font-weight: 500;
  position: fixed;
  float: right;
  width: 50%;
  right: 0vw;/*Отступ справа */
  top: 3vh;
}
a.entire{ /*Стилия для кнопки "Вход" */
  float: right;
  right: 10%;
  padding-top:6pt;
  vertical-align:middle;
  text-align: center;
  position: relative;
  border: 1px solid #71D4DA;
  border-radius: 50px;
  background-color: #71D4DA;/*Фон кнопки */
  width: 90pt;
  height: 28pt;
  color: white;
}
.market:hover{ /*Стили для курсора при наведении на пункт меню "Модели" */
  cursor: pointer;
}
.entire:hover{ /*Стили для курсора при наведении на пункт меню "Вход" */
  cursor: pointer;
}
a.regist{/*Стили для кнопки регистрация */
  padding-top:6pt;
  vertical-align:middle;
  text-align: center;
  position: relative;
  float: right;
  right: 3vw;
  border: 1px solid #1CBAC4;/*Цвет границы */
  border-radius: 50px;
  height: 28pt;
  width: 135pt;
}
.regist:hover{/*Стили для курсора при наведении на пункт меню "Регистрация" */
  cursor: pointer;
}
.chapters{ /*Стили для блока с кнопками */
  position: fixed;
  top: 4vh;
  float: left;
  left: 1%;
  z-index: -1;
}
a.chapter{/*Стили для кнопок */
  width: 90pt;
  height: 28pt;
  font-family: 'Montserrat';
  font-size: 15pt;
  font-style: normal;
  font-weight: 500;
  z-index: 1;
}
.market{/*Стили для кнопки Модели */
  position: relative;
  float: left;
  left: 22vw;
}
.editor{/*Стили для кнопки редактор */
  position: relative;
  float: left;
  left: 12vw;
}
.about{ /*Стили для кнопки о нас */
  position: relative;
  float: left;
  left: 32vw;
}
.about:hover{ /*Стили для курсора при наведении на пункт меню */
  cursor: pointer;
}
.editor:hover{ /*Стили для курсора при наведении на пункт меню */ 
  cursor: pointer;
}
.leftPart{ /*Стили для левой части меню */
  float: left;
  position: fixed;
  width: 72vw;
  left: 1vw;
  top: 1.5vw;
}
</style>