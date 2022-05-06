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
import WorkArea from './Blocks/NavMenu.vue'
import ToolPanel from './Blocks/ToolPanel.vue'
import NavMenu from './Blocks/WorkArea.vue'
export default{
    components:{
        WorkArea,
        ToolPanel,
        NavMenu
    },
    data(){}
}
</script>

<style>

</style>