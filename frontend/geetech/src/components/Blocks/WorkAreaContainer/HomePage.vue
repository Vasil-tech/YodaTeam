<template>
<div class="HomeWorkArea">
<h1>Загрузите свою первую модель</h1>
<button>(Виды поддерживаемых форматов)</button>
<nav class="navb">
<p>примеры моделей:</p>
<ul>
<li><a href="#">biba</a></li>
<li><a href="#">Bigbiba</a></li>
<li><a class="last" href="#">Boba</a></li>
</ul>
</nav>
</div>
</template>

<script>

</script>

<style>
.HomeWorkArea{
    align-conent: center;
    margin-top: 20%
}

.navb li{
    display: inline;
    
}

h1{
    position: relative;
    text-align: center;
    font-family: 'Montserrat';
    font-size: 30px;
    margin-bottom: 0;
}

button{
    position: relative;
    border: none;
    background: #FFFFFF;
    font-family: 'Montserrat';
    font-size: 18px;
}

p{
    text-decoration: none;
    text-align: center;
    font-family: 'Montserrat';
    font-size: 18px;
    padding: 5px 10px;
    margin-bottom: 0;
}
ul{
    padding: 0px;
    margin: 0;
}

.navb a{
    color: black;
    text-align: center;
    text-decoration: none;
    padding: 5px 10px;
    font-family: 'Montserrat';
    font-size: 18px;
    border-right: 1px solid black;
}
.navb a.last{
    border-right: none;
}

</style>