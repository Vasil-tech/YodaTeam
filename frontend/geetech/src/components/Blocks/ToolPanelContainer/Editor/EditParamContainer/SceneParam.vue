<template>
    <div class="SceneParamRoot">
        <div class="backColor">
            <p>Смена цвета фона сцены</p>
            <div class="colorBar">
                <div class="FirstStorka">
                    <button class="BtnWhite" id="white" @click="changeColor('white')"></button>
                    <button class="BtnBlue" id="blue" @click="changeColor('blue')"></button>
                    <button class="BtnRed" id="red" @click="changeColor('red')"></button>
                    <button class="BtnGrey" id="grey" @click="changeColor('grey')"></button>
                    <button class="BtnBlack" id="black" @click="changeColor('black')"></button>
                    
                </div>
                <div class="SecondStroka">
                    <button class="BtnYellow" id="yellow" @click="changeColor('yellow')"></button>
                    <button class="BtnGreen" id="green" @click="changeColor('green')"></button>
                    <button class="BtnPurple" id="purple" @click="changeColor('purple')"></button>
                    <button class="BtnOrange" id="orange" @click="changeColor('orange')"></button>
                    <button class="BtnTema" id="pink" @click="changeColor('pink')"></button>
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
                checked: false
        }
    },
    methods:{
        changeColor(color){
            try{
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
    width: 5%;
    height: auto;
    
}
.colorBar button{
    position: relative;
    width: 2.5vw;
    height: 3.3vh;
    margin: 5%;
}

.colorBar button:hover{
    border-radius: 50%;
}

.FirstStroka{
    width: 100%;
    height: 10%;
    float: right;
    align-content: center;
}
.SecondStroka{
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