<template>
    <div class="top-navbar-wrapper">
        <div class="message-wrapper">
            <i class="iconfont icon-message"></i>
        </div>
        <div class="user-wrapper">
            <img src="@/assets/image/myAvatar.jpg" alt="">
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
        align-items: center;
        width: 100%;
        height: 72px;
        padding-right: 30px;

        .message-wrapper {
            width: 36px;
            height: 36px;
            line-height: 36px;
            border-radius: 10px;
            margin-right: 20px;
            background: #FFFFFF;
            text-align: center;
            cursor: pointer;

            .icon-message {
                font-size: 20px;
            }

            &:hover {
                background: #8cab91;
            }
        }

        .user-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 36px;
            border-radius: 10px;
            background: #FFFFFF;
            padding: 0 8px;

            img {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                margin-right: 5px;
            }

            .name {
                font-size: 12px;
                max-width: 100px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }
</style>
