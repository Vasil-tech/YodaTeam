<template>
    <div class="SceneParamRoot">
        <div class="backColor">
            <p class="title">Смена цвета фона сцены</p>
            
            <div class="colorBar">
                <a>Выберите цвет:</a>
                <div class="FirstStorka">
                    <button class="BtnWhite" id="white" @click="changeColor('#FFFFFF')"></button>
                    <button class="BtnBlue" id="blue" @click="changeColor('#0000FF')"></button>
                    <button class="BtnRed" id="red" @click="changeColor('#FF0000')"></button>
                    <button class="BtnGrey" id="grey" @click="changeColor('#808080')"></button>
                    <button class="BtnBlack" id="black" @click="changeColor('#000000')"></button>
                </div>
                <div class="SecondStroka">
                    <div class="defaultColor"></div>
                    <button class="BtnYellow" id="yellow" @click="changeColor('#FFFF00')"></button>
                    <button class="BtnGreen" id="green" @click="changeColor('#008000')"></button>
                    <button class="BtnPurple" id="purple" @click="changeColor('#800080')"></button>
                    <button class="BtnOrange" id="orange" @click="changeColor('#FFA500')"></button>
                    <button class="BtnTema" id="pink" @click="changeColor('#FFC0CB')"></button>
                </div>
                <div class="inputColor">
                        <a>Палитра:</a>
                        <input type="color" id="color" value="#000000" @change="Changed(this.value)">
                    </div>
            </div>
        </div>
        <p class="title">Управление</p>
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
            <p class="title">Изменение освещения</p>
            <div class="Osveshenie">
                <form>
                    <div class="firsElem">
                <input type="radio" id="contactChoice1" @click="selectLight('ambient')"
                    name="light" value="Ambient Light">
                    <label for="contactChoice1">Ambient Light</label>
                    </div>
                    <div class="secElem">
                    <input type="radio" id="contactChoice2" @click="selectLight('directional')"
                    name="light" value="phone">
                    <label for="contactChoice2">Directional light</label>
                    </div>
                    <div class="thirElem">
                    <input type="radio" id="contactChoice3" @click="selectLight('point')"
                    name="light" value="mail">
                    <label for="contactChoice3">Point light</label>
                    </div>
                </form>
            </div>
            <div class="Scroll">
                <div id="Scroll1" class="name">Свет</div>
                    <div class="widget">
                        <div class="slider">
                            <div class="fill" style="width: 100%">
                            </div>
                        </div>
                        <input class="number" type="number" step="any" aria-labelledby="Skroll1">
                    </div>
            </div>
    </div>
</template>

<script>
import { setVarData } from '@/components/Blocks/scripts/Three/Variables';
export default{
    data(){
        return{
            checked: false,
            rotation: false
        }
    },
    methods:{
        selectLight(light){
            setVarData('light', light)
            this.emitter.emit("Rerender", true)
        },
        changeColor(color){
            try{
                setVarData("color", color)
                document.getElementById('color').value = color;
                this.emitter.emit("Rerender", true);
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'changeColor', 'ext':e})
            }
            },

        Changed(color){
            try{
                color = document.getElementById('color').value;
                setVarData("color", color)
                this.emitter.emit("Rerender", true);
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'changeColor', 'ext':e})
            }
        },
            
        orbContChecked(orbValue){
            try{
                setVarData("orbValue", orbValue)
                this.emitter.emit("Rerender", true)
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'orbContChecked', 'ext':e})
            }
        },
        fullScreen(){
            try{
                this.emitter.emit('FullScreenCanvas', true)
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'fullScreen', 'ext':e})
            }
        },
        rotateOn(){
            try{
                this.rotation = !this.rotation
                setVarData("autoRotate", this.rotation)
                this.emitter.emit("Rerender", true)
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method': 'rotateOn', 'ext': e})
            }
        }
    }
    
}
</script>

<style>
p.title{
    text-decoration: none;
    margin-top: 5%;
    margin-bottom: 5%;
    border-top: 2px solid #B0E0E6;
    border-bottom: 2px solid #B0E0E6;
}
.Scroll{
   align-items: center;
display: flex;
box-sizing: border-box;
font-style: normal;
font-weight: 400;
line-height: 1;
text-align: left;
}
.widget{
    align-items: center;
display: flex;
position: relative;
width: 100%;
box-sizing: border-box;
margin: 0;
padding: 0;
font-style: normal;
font-weight: 400;
line-height: 1;
text-align: left;
}
.slider{
cursor: ew-resize;
overflow: hidden;
touch-action: pan-y;
width: 100%;
box-sizing: border-box;
margin: 0;
padding: 0;
}
.fill{
  box-sizing: content-box;
  height: 100%;
  cursor: ew-resize;
  margin: 0;
padding: 0;
font-style: normal;
font-weight: 400;
line-height: 1;
text-align: left;
}
input .number{
flex-shrink: 0;
outline: none; 
box-sizing: border-box;
margin: 0;
pointer-events: auto;
color: var(--text-color);
font-family: var(--font-family);
font-size: var(--font-size);
font-style: normal;
font-weight: 400;
line-height: 1;
text-align: left;
}


.Osveshenie p{
    top: 5%;
    position: relative;
    margin-top: 0%;
    text-align: left;
}
.Osveshenie{
    position: relative;
    height: 15%;
}
.Osveshenie input{
    position: relative;
    float: left;
    margin: 0%;
    vertical-align: middle;
}
.Osveshenie label{
    position: relative;
    margin: 0%;
    padding-left: 10px;

}

.inputColor input{
    position: relative;
    margin-left: 3%;
}

.orbControl{
    position: relative;
    width: 100%;
    margin-top: 10%;
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