<template>
    <div class="defWinRoot">
        <label>File
            <input type="file" id="file" ref="file" accept=".obj" v-on:change="handleFileUpload()"/>
        </label>
        <button @click="loadButtonClick()">Submit</button>
    </div>
</template>

<script>
//import tolw from "tolw"
export default{
    data(){
        return{
            file: ''
        }
    },
    methods:{
        // handleFileUpload(){
        //     this.file = this.$refs.file.files[0];
        //     console.log(this.file)
        // },
        // loadButtonClick(){
        //     const tolw = require("tolw");
        //     // initialise tolw
        //     tolw.init().then(() => {
        //     let binaryFile = new Uint8Array(fs.readFileSync(this.file, null));
        //     let {vertices, normals, uvs, indices} = tolw.loadObj(binaryFile);
        //     console.log(vertices, normals, uvs, indices)
        //     });
        // }
    }
}
</script>
