<template>
    <div class="navbar-wrapper">
        <div class="logo-wrapper">
            <img class="logo" src="@/assets/image/logo.svg" alt="logo" @click="toHome()">
            <div class="name">悦阅</div>
        </div>
        <div class="nav-list">
            <div class="nav-item"
                v-for="(item, index) in navList"
                :key="index"
                :class="{ 'selected': currentNav.key === item.key }"
                @click="changeNav(item)">
                <i class="iconfont" :class="item.icon"></i>
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
            { key: 'home', name: '首页', icon: 'icon-home' },
            { key: 'library', name: '图书馆', icon: 'icon-bookcase' },
            { key: 'bookcase', name: '个人书柜', icon: 'icon-book' },
            { key: 'history', name: '观看历史', icon: 'icon-history' },
        ];
        currentNav: any = {};

        toHome() {
            this.$router.push({ path: '/home' });
        }

        changeNav(item) {
            this.currentNav = item;
            this.$router.push({ path: `/${item.key}` });
        }

        mounted () {
            this.currentNav = this.navList[0];
        }
    }
</script>

<style lang="less" scoped>
    .navbar-wrapper {
        border-radius: 20px;
        background: #FFFFFF;
        padding: 20px 10px;

        .logo-wrapper {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;

            .logo {
                width: 36px;
                height: 36px;
                background: var(--mainColor);
                border-radius: 5px;
                cursor: pointer;
            }

            .name {
                font-size: 24px;
                font-weight: bold;
                color: var(--mainColor);
                margin-left: 20px;
            }
        }

        .nav-list {
            display: flex;
            flex-wrap: wrap;

            .nav-item {
                display: flex;
                align-items: center;
                position: relative;
                width: 100%;
                padding: 10px 5px;
                margin-bottom: 10px;
                border-radius: 5px;
                cursor: pointer;

                .iconfont {
                    font-size: 20px;
                    margin-right: 16px;
                    color: var(--textColor);
                }

                .name {
                    color: var(--textColor);
                }

                &:hover,
                &.selected {
                    background: var(--hoverColor);

                    .iconfont,
                    .name {
                        color: var(--mainColor);
                    }
                }

                &.selected {
                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        right: -10px;
                        height: 100%;
                        width: 4px;
                        border-radius: 6px;
                        background: var(--mainColor);
                    }
                }
            }
        }
    }
</style>
