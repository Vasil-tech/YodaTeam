<template>
    <div class="MainContainerRoot">
        <div class="navMenu">
            <nav-menu></nav-menu>
        </div>
        <div class="toolPanel">
            <tool-panel></tool-panel>
        </div>
        <div class="workArea">
            <work-area></work-area>
        </div>
    </div>
</template>

<script>
import NavMenu  from './Blocks/NavMenu.vue'
import ToolPanel from './Blocks/ToolPanel.vue'
import WorkArea from './Blocks/WorkArea.vue'    
export default{
    components:{
        NavMenu,
        WorkArea,
        ToolPanel
       
    },
    data(){}
}
</script>

<style>

</style>