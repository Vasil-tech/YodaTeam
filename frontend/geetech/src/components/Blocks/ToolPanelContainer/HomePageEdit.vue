<template>
<div class="HomePageEdit">
    <div class="container1">
        <button class="points">•••</button>
    </div>
    <div class="container2">
        <p>Выберете модель, которую необходимо просмотреть</p>
    </div>
    <div class="container3">
    <hr>
        <label class="ForFile" @click="loadClick()">
            <span>Выберете файл</span>
        </label>
        <input id="input" class="inputForFile" type="file" accept=".obj">
    </div>
</div>
</template>


<script>
import errorHandler from "../scripts/errorHandler";
import {userLoader} from "../scripts/Three/Loader.js"
//import {fs} from 'fs'
export default{
    methods:{
        loadClick(){
            document.querySelector('.inputForFile').click()
            const inputElement = document.getElementById("input");
            inputElement.addEventListener("change", handleFiles, false);
        }
    }
}
function handleFiles() {
    try{
        const fileList = this.files;
        const fs = require('fs');
        userLoader(fs, fileList[0])
    }
    catch(e){
        errorHandler("HomePage", "handleFiles", e, "canvas")
    }
}
</script>

<style>
.HomePageEdit{
    position:fixed;
    height: 85%;
    width: 24%;
}
.container1{
    position:relative;
    height: 10%;
}

button.points{
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
.container3{
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
label.ForFile{
    margin-top: 10px;
    padding: 15px;
    border-radius: 40px;
    background: #71D4DA;
    font-family: 'Montserrat';
    font-size: 18px;
    display: inline-block;
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