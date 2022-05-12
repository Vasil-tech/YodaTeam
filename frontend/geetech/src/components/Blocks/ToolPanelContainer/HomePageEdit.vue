<template>
<div class="HomePageEdit">
    <div class="conteiner1">
        <button class="TriToch">•••</button>
    </div>
    <div class="container2">
        <p>Выберете модель, которую необходимо просмотреть</p>
    </div>
    <div class="conteiner3">
    <hr>
        <button class="ForFile" href="#">Выберете файл</button>
    </div>
</div>
</template>


<script>

</script>

<style>
    
.HomePageEdit{
    position:fixed;
    height: 85%;
    width: 24%;
}
.conteiner1{
    position:relative;
    height: 10%;
}

button.TriToch{
    position: relative;
    float: right;
    font-size: 30px;
    margin-right: 10px;
    background: #FFFFFF;
    border: #FFFFFF;
    margin-top: none;

}
.container2{
    position: relative;
    height: 45%;
    margin: 10px;  
    align-content: center;
    text-align: center;
    margin-top: 45%;
}
.conteiner3{
    position:relative;
    height: 20%;
    Float: center;
    margin-bottom: 10px;
}
p{
    font-family: 'Montserrat';
    font-size: 18px;
}
hr{
    border: none;
    border-top: 2px solid #1CBAC3;
    width: 80%;
}
button.ForFile{
    margin-top: 10px;
    padding: 15px;
    border-radius: 40px;
    background: #71D4DA;
    border: none;
   font-family: 'Montserrat';
   font-size: 18px;
}

</style>