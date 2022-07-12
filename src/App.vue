<template>
    <div id="app">
        <NavBar class="navbar" />
        <router-view />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NavBar from '@/components/Navbar.vue';

    export default Vue.extend({
        name: 'App',
        components: {
            NavBar
        },
    });
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #app {
        position: relative;
        width: auto;
        height: 100vh;
        background: #f5fcf6;
    }
    .navbar {
        position: absolute;
        top: 30px;
        left: 30px;
        height: calc(100% - 60px);
    }
</style>
