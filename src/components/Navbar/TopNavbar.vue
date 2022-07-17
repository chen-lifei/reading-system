<template>
    <div class="top-navbar-wrapper">
        <div class="message-wrapper">
            +
        </div>
        <div class="user-wrapper">
            <img src="@/assets/public/myAvatar.jpg" alt="">
            <div class="name">言言花花</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Watch } from 'vue-property-decorator';

    @Component
    export default class TopNavbar extends Vue {
    }
</script>

<style lang="less" scoped>
    .top-navbar-wrapper {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 36px;
        line-height: 36px;
        margin-top: 30px;

        .message-wrapper {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            margin-right: 20px;
            background: #d8e3d9;
            text-align: center;
            cursor: pointer;
        }

        .user-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 36px;
            border-radius: 10px;
            background: #d8e3d9;
            padding: 0 8px;

            img {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                margin-right: 5px;
            }

            .name {
                font-size: 12px;
            }
        }
    }
</style>
