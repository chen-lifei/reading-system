<template>
    <div class="navbar-wrapper">
        <div class="logo-wrapper">
            <div class="logo"></div>
            <div class="name">悦阅</div>
        </div>
        <div class="nav-list">
            <div class="nav-item"
                v-for="(item, index) in navList"
                :key="index"
                :class="{ 'active': currentNav.key === item.key }"
                @click="changeNav(item)">
                <div class="icon">{{ item.icon || '+' }}</div>
                <div class="name">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Watch } from 'vue-property-decorator';

    @Component
    export default class LeftNavbar extends Vue {
        navList = [
            { key: 'home', name: '首页', icon: '' },
            { key: 'book', name: '个人书柜', icon: '' },
            { key: 'history', name: '观看历史', icon: '' },
        ];
        currentNav = {};

        changeNav(item) {
            this.currentNav = item;
        }

        mounted () {
            this.currentNav = this.navList[0];
        }
    }
</script>

<style lang="less" scoped>
    .navbar-wrapper {
        border-radius: 20px;
        background: #d8e3d9;
        padding: 20px 10px;

        .logo-wrapper {
            display: flex;
            margin-bottom: 30px;

            .logo {
                width: 36px;
                height: 36px;
                background: #8cab91;
                border-radius: 5px;
            }

            .name {
                font-size: 24px;
                font-weight: bold;
                color: #8cab91;
                margin-left: 20px;
            }
        }

        .nav-list {
            display: flex;
            flex-wrap: wrap;

            .nav-item {
                display: flex;
                width: 100%;
                padding: 10px 5px;
                margin-bottom: 10px;
                border-radius: 5px;
                cursor: pointer;

                .icon {
                    width: 16px;
                    height: 16px;
                    margin-right: 10px;
                    color: #7d8592;
                }

                .name {
                    color: #7d8592;
                }

                &:hover,
                &.active {
                    background: #8cab91;

                    .icon,
                    .name {
                        color: #c5ebca;
                    }
                }
            }
        }
    }
</style>
