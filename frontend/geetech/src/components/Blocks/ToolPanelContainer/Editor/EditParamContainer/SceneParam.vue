<template>
    <div class="SceneParamRoot">
        <div class="backColor">
            <p>Смена цвета фона сцены</p>
            
            <div class="colorBar">
                <div class="FirstStorka">
                    <button class="BtnWhite" id="white" @click="changeColor('#FFFFFF')"></button>
                    <button class="BtnBlue" id="blue" @click="changeColor('#0000FF')"></button>
                    <button class="BtnRed" id="red" @click="changeColor('#FF0000')"></button>
                    <button class="BtnGrey" id="grey" @click="changeColor('#808080')"></button>
                    <button class="BtnBlack" id="black" @click="changeColor('#000000')"></button>
                    
                </div>
                <div class="SecondStroka">
                    <button class="BtnYellow" id="yellow" @click="changeColor('#FFFF00')"></button>
                    <button class="BtnGreen" id="green" @click="changeColor('#008000')"></button>
                    <button class="BtnPurple" id="purple" @click="changeColor('#800080')"></button>
                    <button class="BtnOrange" id="orange" @click="changeColor('#FFA500')"></button>
                    <button class="BtnTema" id="pink" @click="changeColor('#FFC0CB')"></button>
                    <input type="color" id="color" value="#000000" @change="Changed(this.value)">
                </div>
            </div>
        </div>
        <div class="control">
            <div class="orbControl">
            <input 
                type="checkbox" 
                id="checkbox" 
                v-model="checked" 
                :value="checkboxVal"
                :checked="booleanValue"
                @input="orbContChecked(!checked)"
            >
            <label for="checkbox">Включить orbit control</label>
            </div>
            <div class="rotate" v-if="checked">
                <button @click="rotateOn()">Auto rotate</button>
            </div>
            <div class="fullScreenButt" id="fullScreenButt">
                <button @click="fullScreen()">Открыть на весь экран</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
                rotateStatus: false,
                checked: false,
        }
    },
    methods:{
        changeColor(color){
            try{
                this.emitter.emit("SceneBackgroundColor", color);
                document.getElementById('color').value = color;
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'changeColor', 'ext':e})
            }
            },

        Changed(color){
            try{
                color = document.getElementById('color').value;
                this.emitter.emit("SceneBackgroundColor", color);
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'changeColor', 'ext':e})
            }
        },
            
        orbContChecked(orbValue){
            try{
                this.emitter.emit("OrbitControlStatus", orbValue)
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'orbContChecked', 'ext':e})
            }
        },
        fullScreen(){
            // try{
            //     this.emitter.emit('FullScreenCanvas', true)
            // }
            // catch(e){
            //     this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'fullScreen', 'ext':e})
            // }
        },
        rotateOn(){
            try{
                this.rotateStatus = !this.rotateStatus
                this.emitter.emit("RotateOn", this.rotateStatus)
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method': 'rotateOn', 'ext': e})
            }
        }
    }
    
}
</script>
<style>
input{
    position: relative;
    margin-left: 10%;
}

.orbControl{
    position: relative;
    width: 100%;
    margin-top: 30%;
}

.backColor p{
    text-decoration: none;
    margin-top: 5%;
    margin-bottom: 5%;
    border-top: 2px solid #B0E0E6;
    border-bottom: 2px solid #B0E0E6;
}
.colorBar{
    width: 100%;
    margin-bottom: 5%;
}

label{
    font-family: 'Montserrat','sans-serif';
    font-size: 18px;
}
.control button{
    position: relative;
    width: 100%;
    margin: 0;
    padding: 5px;
    background-color: #fbfaff;
    text-align: left;
}
.control button:hover{
    background-color: #B0E0E6;
}
#checkbox{
    position: relative;
    width: 5%;
    height: auto;
    
}
.colorBar button{
    position: relative;
    width: 25px;
    height: 25px;
    margin: 2%;
    float: left;
}

.colorBar button:hover{
    border-radius: 50%;
}

.FirstStorka{
    position: relative;
    width: 100%;
    height: 10%;
    float: right;
    align-content: center;
}
.SecondStroka{
    position: relative;
    width: 100%;
    height: 10%;
    float: right;
    align-content: center;
}

button.BtnGrey{
    
    background-color: grey;
    border: 1px solid #B0E0E6;
}
button.BtnRed{
    
    background-color: red;
    border: 1px solid #B0E0E6;
}
button.BtnWhite{
   
    background-color: white;
    border: 1px solid #B0E0E6;
}
button.BtnBlack{
   
    background-color: black;
    border: 1px solid #B0E0E6;
}
button.BtnBlue{
    
    background-color: blue;
    border: 1px solid #B0E0E6;
}
button.BtnYellow{
    
    background-color: yellow;
    border: 1px solid #B0E0E6;
}
button.BtnGreen{

    background-color: green;
    border: 1px solid #B0E0E6;
}
button.BtnOrange{
    
    background-color: orange;
    border: 1px solid #B0E0E6;
}
button.BtnTema{
  
    background-color: pink;
    border: 1px solid #B0E0E6;
}
button.BtnPurple{
  
    background-color: rebeccapurple;
    border: 1px solid #B0E0E6;
}


</style>