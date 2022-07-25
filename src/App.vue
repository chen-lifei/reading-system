<template>
    <div id="app">
        <LeftNavbar class="left-navbar" />
        <div class="right-wrapper">
            <TopNavbar class="top-navbar" />
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import LeftNavbar from '@/components/Navbar/LeftNavbar.vue';
    import TopNavbar from '@/components/Navbar/TopNavbar.vue';

    export default Vue.extend({
        name: 'App',
        components: {
            LeftNavbar,
            TopNavbar,
        },
    });
</script>

<style lang="css">
    :root {
        --backColor: #F6FCF2;
        --hoverColor: #EDF7E6;
        --activeColor: #D8E3D9;
        --mainColor: #8CAB91;
    }
</style>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #app {
        position: relative;
        width: auto;
        height: 100vh;
        background: var(--backColor);
    }
    .left-navbar {
        position: absolute;
        top: 30px;
        left: 30px;
        width: 180px;
        height: calc(100% - 60px);
    }
    .right-wrapper {
        width: calc(100% - 270px);
        height: 100vh;
        margin-left: 240px;
        overflow: hidden;
    }
</style>
