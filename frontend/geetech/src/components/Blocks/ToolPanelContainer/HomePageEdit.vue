<template>
<div class="HomePageEdit">
    <div class="container2">
        <p>Выберете модель, которую необходимо просмотреть</p>
    </div>
    <div class="container3">
    <hr>
        <label class="ForFile" @click="loadClick()">
            <span>Выберите файл</span>
        </label>
        <input id="input" class="inputForFile" type="file" accept=".obj">
    </div>
</div>
</template>


<script>
//import errorHandler from "../scripts/errorHandler";
export default{
    methods:{
         loadClick(){
             document.querySelector('.inputForFile').click()
             const inputElement = document.getElementById("input");
             inputElement.addEventListener("change", function (){
            let reader = new FileReader();
            reader.readAsText(inputElement.files[0])
            reader.onload = function(){
              console.log(reader.result)
            }
          }, true);
         }

    }
}

</script>

<style>
.HomePageEdit{
    position:fixed;
    height: 85vh;
    width: 24vw;
}
.container2{
    position: relative;
    top: 25vh;
}
.container3{
    top: 85%;
    position:absolute;
    margin:auto;
    left:0;
    right:0;
    display: block;
    text-align: center;
}
p{
        vertical-align: middle;

    font-family: 'Montserrat';
    font-size: 18px;
}
hr{
    border: none;
    border: 1px solid #8E8E8E;
    width: 80%;
}
label.ForFile{
    margin-top: 10px;
    padding: 15px;
    border-radius: 40px;
    background: #71D4DA;
    font-family: 'Montserrat';
    font-size: 18px;
    display: inline-block;
    color: #FFFFFF;
    cursor: pointer;
}
input.inputForFile{
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	z-index: -1;
}
</style>