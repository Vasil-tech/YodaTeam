<template><!--Блок гипертекстовой разметки-->
  <div class="AboutUs">
    <h1>О нас</h1>
      <p class="About">Здравствуйте, уважаемые посетители нашего сайта. Данный проект является выпускной квалификационной работой и предназначен для просмотра ваших 3D моделей без использования сторонних ПО.
        Разработкой данного проека занимались выпускники Санкт-Петербургского колледжа Телекоммуникаций. Ознакомится с другими нашими проектами вы можете по ссылкам ниже: </p>
        <p class="About"><a class="abouts" href="https://github.com/Vasil-tech" target="_blank">Болдаков Василий - BackEnd</a></p> <!--Текст ссылка на git-->
        <p class="About"><a class="abouts" href="https://github.com/Neuromancer404" target="_blank">Осипов Кирилл - Работа с 3D</a></p> <!--Текст ссылка на git-->
        <p class="About"><a class="abouts" href="https://github.com/AndreySoKuR" target="_blank">Сокур Андрей - Frontend</a></p> <!--Текст ссылка на git-->
        <p class="About"><a class="abouts" href="https://github.com/mszubova" target="_blank"> Зубова Мария - Дизайн</a></p> <!--Текст ссылка на git-->
  </div>
</template>


<script>//Блок скрипта
export default {
  components: { },}
</script>
<style>/*Каскадные таблицы стилей стилей */
.About{/*Стили для страницы "О нас"*/
  position: relative;
  text-align: justify;
}
.abouts{/*Стили для ссылок*/
  text-decoration: none;
}
</style>