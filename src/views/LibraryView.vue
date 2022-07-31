<template>
    <div class="library-view">
        <SelectBar class="left-bar hidden-scrollbar"></SelectBar>
    </div>
</template>

<script lang="ts">
    import SelectBar from '@/components/Navbar/SelectNavbar.vue';

    import { Vue, Component, Watch } from 'vue-property-decorator';

    @Component({
        components: {
            SelectBar
        }
    })
    export default class LibraryView extends Vue {
    }
</script>

<style lang="less" scoped>
    .library-view {
        width: 100%;
        height: 100%;
        overflow: auto;

        .left-bar {
            height: calc(100% - 30px);
        }
    }
</style>